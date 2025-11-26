import { useContext } from "react";
import TasksContext from "@/contexts/TasksContext";
import type { TasksContextType } from "@/types/TasksContextType";

export const useTasksContext = (): TasksContextType => {
  const ctx = useContext(TasksContext);
  if (!ctx) {
    throw new Error("useTasksContext must be used within a TasksProvider");
  }
  return ctx;
};
