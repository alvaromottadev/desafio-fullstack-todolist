import type { TaskResponseDTO } from "@/types/TaskResponseDTO";
import { Text } from "../common/Text";
import { ClipboardCheck, ListTodo } from "lucide-react";
import { TaskDialog, TaskCard } from "./index";
import type { TaskCreateDTO } from "@/types/TaskCreateDTO";
import { Button } from "../ui/button";
import type { TaskUpdateDTO } from "@/types/TaskUpdateDTO";

interface TasksDisplayProps {
  tasks: TaskResponseDTO[];
  onToggle: (taskId: string) => void;
  onCreate: (taskCreateDto: TaskCreateDTO) => Promise<TaskResponseDTO>;
  onUpdate: (
    id: string,
    taskUpdateDto: TaskUpdateDTO
  ) => Promise<TaskResponseDTO>;
  onRemove: (id: string) => Promise<void>;
  isLoading: boolean;
}

export const TasksDisplay = ({
  tasks,
  onToggle,
  onCreate,
  onUpdate,
  onRemove,
  isLoading,
}: TasksDisplayProps) => {
  return (
    <div className="w-[90%] lg:w-[50rem] max-w-4xl mx-auto ">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-[var(--primary-color)] to-green-500 p-6">
          <div className="flex items-center gap-3 text-white">
            <ClipboardCheck size={28} />
            <Text className="text-2xl font-bold">Minhas Tarefas</Text>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <TaskDialog
              initialTaskDto={null}
              onCreate={onCreate}
              onUpdate={onUpdate}
              isLoading={isLoading}
            >
              <Button className="w-full bg-[var(--primary-color)] hover:bg-[var(--primary-color-hover)] text-white font-bold py-2 px-4 hover:-translate-y-1 transition-transform duration-200 rounded cursor-pointer">
                Criar Tarefa
              </Button>
            </TaskDialog>
          </div>

          {tasks.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 px-4">
              <div className="bg-[var(--background-color)] rounded-full p-6 mb-4">
                <ListTodo size={64} className="text-white" />
              </div>
              <Text className="text-xl font-bold mb-2">
                Nenhuma tarefa ainda
              </Text>
              <Text className="text-gray-500 text-center">
                Comece criando sua primeira tarefa para organizar seu dia!
              </Text>
            </div>
          ) : (
            <div className="space-y-4 max-h-[calc(100vh-28rem)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-gray-100">
              {tasks.map((task) => (
                <TaskCard
                  onRemove={onRemove}
                  onUpdate={onUpdate}
                  task={task}
                  key={task.id}
                  onToggle={onToggle}
                  isLoading={isLoading}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
