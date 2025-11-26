import type { FilterType } from "./FilterType";
import type { TaskCreateDTO } from "./TaskCreateDTO";
import type { TaskResponseDTO } from "./TaskResponseDTO";
import type { TaskUpdateDTO } from "./TaskUpdateDTO";

export type TasksContextType = {
  stats: { total: number; completed: number; pending: number };
  filteredTasks: TaskResponseDTO[];
  createTask: (dto: TaskCreateDTO) => Promise<TaskResponseDTO>;
  updateTask: (id: string, dto: TaskUpdateDTO) => Promise<TaskResponseDTO>;
  removeTask: (id: string) => Promise<void>;
  isLoading: boolean;
  setFilter: (filter: FilterType) => void;
  filter: FilterType;
};
