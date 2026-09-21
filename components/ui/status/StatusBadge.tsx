import {Badge} from "../../../components/ui/Badge"
import { Order } from "@/types/domain/profile";
import { orderStatusConfig } from "@/lib/constrants/profile";

interface StatusBadgeProps {
  status: Order["status"];
}

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  const config = orderStatusConfig[status];

  return (
    <Badge
      variant="outline"
      className={config.className}
    >
      {config.label}
    </Badge>
  );
}