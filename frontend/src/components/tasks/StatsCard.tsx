import { Text } from "../common/Text";
import { Title } from "../common/Title";

interface StatsCardProps {
  value: number;
  label: string;
  className?: string;
}

export const StatsCard = ({ value, label, className }: StatsCardProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-[90%] md:w-[15rem] h-[6.12rem] m-2 rounded-[0.5rem] bg-white ${className}`}
    >
      <Title className="text-[var(--primary-color)]">{value}</Title>
      <Text className="text-[var(--primary-color)] font-bold">{label}</Text>
    </div>
  );
};
