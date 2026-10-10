import { Badge } from "../Badge";
import { StockStatus } from "@/types/domain/stock";
import { stockConfigConstant } from "@/lib/constrants/product";
interface StockBadgeProps {
  status: StockStatus;
}

export default function StockBadge({ status }: StockBadgeProps) {
  const config = stockConfigConstant[status];

  return (
    <Badge variant="outline" className={config.className}>
      {config.label}
    </Badge>
  );
}