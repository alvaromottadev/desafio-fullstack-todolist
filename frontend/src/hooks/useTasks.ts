import { useCallback, useEffect, useMemo, useState } from "react";
import clientApi from "../api/client-api";
import type { TaskResponseDTO } from "../types/TaskResponseDTO";

export const useTasks = () => {
  const [tasks, setTasks] = useState<TaskResponseDTO[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchTasks = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await clientApi
        .get<TaskResponseDTO[]>("/tasks2")
        .then((res) => res.data);
      setTasks(response);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter((task) => task.isDone).length;
    const pending = total - completed;
    return { total, completed, pending };
  }, [tasks]);

  return { tasks, isLoading, fetchTasks, stats };
};
