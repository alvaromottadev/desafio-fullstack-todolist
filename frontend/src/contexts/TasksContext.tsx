import { useTasks } from "@/hooks/useTasks";
import type { FilterType } from "@/types/FilterType";
import type { TaskCreateDTO } from "@/types/TaskCreateDTO";
import type { TaskResponseDTO } from "@/types/TaskResponseDTO";
import type { TaskUpdateDTO } from "@/types/TaskUpdateDTO";
import { createContext, useMemo, type ReactNode } from "react";

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

const TasksContext = createContext<TasksContextType | undefined>(undefined);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const {
    stats,
    filteredTasks,
    updateTask,
    createTask,
    removeTask,
    isLoading,
    setFilter,
    filter,
  } = useTasks();

  const value: TasksContextType = useMemo(
    () => ({
      stats,
      filteredTasks,
      createTask,
      updateTask,
      removeTask,
      isLoading,
      setFilter,
      filter,
    }),
    [
      stats,
      filteredTasks,
      createTask,
      updateTask,
      removeTask,
      isLoading,
      setFilter,
      filter,
    ]
  );
  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};

export default TasksContext;
