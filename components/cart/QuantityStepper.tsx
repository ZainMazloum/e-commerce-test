import { Minus, Plus } from "lucide-react";

function QuantityStepper({
  quantity,
  onDecrement,
  onIncrement,
}: {
  quantity: number;
  onDecrement: () => void;
  onIncrement: () => void;
}) {
  return (
    <div className="flex items-center gap-2 mt-3">
      <button
        onClick={onDecrement}
        className="w-6 h-6 rounded-full border border-border flex items-center justify-center text-text-secondary cursor-pointer hover:border-primary hover:text-primary transition-colors duration-200"
        aria-label="Decrease quantity"
      >
        <Minus size={12} />
      </button>
      <span className="w-5 text-center text-sm font-medium text-text-primary">
        {quantity}
      </span>
      <button
        onClick={onIncrement}
        className="w-6 h-6 rounded-full border border-border flex items-center justify-center text-text-secondary cursor-pointer hover:border-primary hover:text-primary transition-colors duration-200"
        aria-label="Increase quantity"
      >
        <Plus size={12} />
      </button>
    </div>
  );
}

export default QuantityStepper;