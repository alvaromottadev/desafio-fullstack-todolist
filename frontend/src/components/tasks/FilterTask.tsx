import type { FilterType } from "@/types/FilterType";
import { Button } from "../ui/button";

interface FilterTaskProps {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
}

export const FilterTask = ({ filter, setFilter }: FilterTaskProps) => {
  const isActive = (value: FilterType) => {
    return filter === value && "bg-[var(--primary-color-hover)]";
  };
  return (
    <div className="p-6 border-b border-[var(--primary-color)]">
      <div className="flex items-center justify-center">
        <div className="flex gap-3">
          <Button
            onClick={() => setFilter("all")}
            variant="ghost"
            className={`
          py-1 px-4 font-medium border rounded-lg hover:bg-[var(--primary-color-hover)]
          ${isActive("all")}
        `}
          >
            Todas
          </Button>

          <Button
            onClick={() => setFilter("pending")}
            variant="ghost"
            className={`
          py-1 px-4 font-medium border rounded-lg hover:bg-[var(--primary-color-hover)]
          ${isActive("pending")}
        `}
          >
            Pendentes
          </Button>

          <Button
            onClick={() => setFilter("completed")}
            variant="ghost"
            className={`
          py-1 px-4 font-medium border rounded-lg hover:bg-[var(--primary-color-hover)]
          ${isActive("completed")}
        `}
          >
            Concluídas
          </Button>
        </div>
      </div>
    </div>
  );
};
