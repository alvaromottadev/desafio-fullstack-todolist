import { useCallback, useEffect, useMemo, useState } from "react";
import clientApi from "../api/client-api";
import type { TaskResponseDTO } from "../types/TaskResponseDTO";
import type { TaskCreateDTO } from "@/types/TaskCreateDTO";
import type { TaskUpdateDTO } from "@/types/TaskUpdateDTO";
import { toast } from "sonner";

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
        .then((res) => {
          toast.success("Tarefa criada com sucesso!");
          return res.data;
        });
      setTasks((prevTasks) => [response, ...prevTasks]);
      return response;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateTask = useCallback(
    async (id: string, updateTaskDTO: TaskUpdateDTO) => {
      setIsLoading(true);
      try {
        const response = await clientApi
          .patch<TaskResponseDTO>(`/tasks/${id}`, updateTaskDTO)
          .then((res) => {
            toast.success("Tarefa atualizada com sucesso!");
            return res.data;
          });
        setTasks((prevTasks) =>
          prevTasks.map((task) => (task.id === id ? response : task))
        );
        return response;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const removeTask = useCallback(async (id: string) => {
    setIsLoading(true);
    try {
      await clientApi.delete(`/tasks/${id}`).then(() => {
        toast.success("Tarefa removida com sucesso!");
      });
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
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

  return {
    tasks,
    isLoading,
    fetchTasks,
    createTask,
    updateTask,
    removeTask,
    stats,
  };
};
