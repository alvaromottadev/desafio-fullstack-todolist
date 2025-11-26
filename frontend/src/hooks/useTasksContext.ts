import { useContext } from "react";
import TasksContext, { type TasksContextType } from "@/contexts/TasksContext";

export const useTasksContext = (): TasksContextType => {
  const ctx = useContext(TasksContext);
  if (!ctx) {
    throw new Error("useTasksContext must be used within a TasksProvider");
  }
  return ctx;
};
