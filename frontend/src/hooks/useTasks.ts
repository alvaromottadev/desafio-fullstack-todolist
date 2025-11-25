import { useCallback, useEffect, useMemo, useState } from "react";
import clientApi from "../api/client-api";
import type { TaskResponseDTO } from "../types/TaskResponseDTO";
import type { TaskCreateDTO } from "@/types/TaskCreateDTO";
import type { TaskUpdateDTO } from "@/types/TaskUpdateDTO";

export const useTasks = () => {
  const [tasks, setTasks] = useState<TaskResponseDTO[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchTasks = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await clientApi
        .get<TaskResponseDTO[]>("/tasks")
        .then((res) => res.data);
      setTasks(response);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const createTask = useCallback(async (taskCreateDTO: TaskCreateDTO) => {
    setIsLoading(true);
    try {
      const response = await clientApi
        .post<TaskResponseDTO>("/tasks", taskCreateDTO)
        .then((res) => res.data);
      setTasks((prevTasks) => [...prevTasks, response]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateTask = useCallback(
    async (id: string, updateTaskDTO: TaskUpdateDTO) => {
      setIsLoading(true);
      try {
        const response = await clientApi
          .put<TaskResponseDTO>(`/tasks/${id}`, updateTaskDTO)
          .then((res) => res.data);
        setTasks((prevTasks) =>
          prevTasks.map((task) => (task.id === id ? response : task))
        );
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter((task) => task.isDone).length;
    const pending = total - completed;
    return { total, completed, pending };
  }, [tasks]);

  return { tasks, isLoading, fetchTasks, createTask, updateTask, stats };
};
