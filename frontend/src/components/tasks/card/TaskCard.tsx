import type { TaskResponseDTO } from "@/types/TaskResponseDTO";
import { Title } from "../../common";
import { Text } from "../../common";
import { Calendar, Clock } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { TaskDialog } from "../index";
import { Button } from "@/components/ui/button";
import type { TaskUpdateDTO } from "@/types/TaskUpdateDTO";
import { DeleteTaskAlert } from "../index";

interface TaskCardProps {
  task: TaskResponseDTO;
  onToggle?: (taskId: string) => void;
  onUpdate: (
    id: string,
    taskUpdateDto: TaskUpdateDTO
  ) => Promise<TaskResponseDTO>;
  onRemove: (id: string) => Promise<void>;
  isLoading: boolean;
}

/*
This component displays a task card with details such as title, description, status, creation date, and due date.
*/
export const TaskCard = ({
  task,
  onToggle,
  onUpdate,
  onRemove,
  isLoading,
}: TaskCardProps) => {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div
      className={`w-full bg-[var(--background-card)] rounded-lg border-l-4 shadow-lg p-4 hover:translate-x-2 hover:shadow-xl transition-all duration-300 ${
        task.isDone
          ? "border-l-green-500 opacity-70"
          : "border-l-[var(--primary-color)]"
      }`}
    >
      <div className="flex items-start justify-between gap-3 mb-3 ">
        <div className="flex items-start gap-3 flex-1 min-w-0 ">
          <Checkbox
            checked={task.isDone}
            onCheckedChange={() => onToggle?.(task.id)}
            className="mt-1"
          />
          <Title
            className={`text-xl truncate ${
              task.isDone
                ? "text-gray-500 line-through"
                : "text-[var(--primary-color)]"
            }`}
          >
            {task.title}
          </Title>
          <div className="mt-3 flex items-center gap-2 mr-0 justify-end self-end ml-auto ">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                task.isDone
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {task.isDone ? "✅ Concluída" : "⏳ Pendente"}
            </span>
          </div>
        </div>
      </div>

      {task.description && (
        <Text className="text-gray-600 mb-4 line-clamp-2 truncate">
          {task.description}
        </Text>
      )}

      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
        {task.dueDate && (
          <div className="flex items-center gap-1.5">
            <Calendar size={16} className="text-[var(--primary-color)]" />
            <span>Vence: {formatDate(task.dueDate)}</span>
          </div>
        )}

        <div className="flex items-center gap-1.5">
          <Clock size={16} className="text-gray-400" />
          <span>
            Criado: {formatDate(task.createdAt)} às {formatTime(task.createdAt)}
          </span>
        </div>
      </div>

      {new Date(task.updatedAt).getTime() !==
        new Date(task.createdAt).getTime() && (
        <div className="mt-2 text-xs text-gray-400 flex items-center gap-1.5">
          <span>✏️ Atualizado: {formatDate(task.updatedAt)}</span>
        </div>
      )}
      <div className="space-x-2">
        <TaskDialog
          isLoading={isLoading}
          initialTaskDto={task}
          onUpdate={onUpdate}
        >
          <Button className="mt-2 bg-[var(--background-color)] cursor-pointer">
            Editar
          </Button>
        </TaskDialog>
        <DeleteTaskAlert onRemove={onRemove} id={task.id}>
          <Button variant={"destructive"} className="cursor-pointer">
            Excluir
          </Button>
        </DeleteTaskAlert>
      </div>
    </div>
  );
};
