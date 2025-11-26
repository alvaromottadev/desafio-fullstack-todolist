import { Text } from "../../common";
import { Title } from "../../common";

interface StatsCardProps {
  value: number;
  label: string;
  className?: string;
}

/*
This component displays a statistics card with a value and label.
It accepts the following props:
- value: The numerical value to display.
- label: The label describing the statistic.
- className: Optional additional CSS classes for styling.
*/
export const StatsCard = ({ value, label, className }: StatsCardProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-[90%] lg:w-full h-[6.25rem] rounded-[0.5rem] bg-white shadow-xl ${className}`}
    >
      <Title className="text-[var(--primary-color)]">{value}</Title>
      <Text className="text-[var(--primary-color)] font-bold">{label}</Text>
    </div>
  );
};
