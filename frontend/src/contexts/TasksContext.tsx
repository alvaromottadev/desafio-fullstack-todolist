import { useTasks } from "@/hooks/useTasks";
import type { TasksContextType } from "@/types/TasksContextType";
import { createContext, useMemo, type ReactNode } from "react";

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
