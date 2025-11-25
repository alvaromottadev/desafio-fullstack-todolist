import type { TaskResponseDTO } from "@/types/TaskResponseDTO";
import { Text } from "../common/Text";
import { ClipboardCheck, ListTodo } from "lucide-react";
import { CreateTaskButton } from "./CreateTaskButton";
import { TaskCard } from "./TaskCard";

interface TasksDisplayProps {
  tasks: TaskResponseDTO[];
  onToggle: (taskId: string) => void;
}

export const TasksDisplay = ({ tasks, onToggle }: TasksDisplayProps) => {
  return (
    <div className="w-full lg:w-[47rem] max-w-4xl mx-auto px-4">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-[var(--primary-color)] to-green-500 p-6">
          <div className="flex items-center gap-3 text-white">
            <ClipboardCheck size={28} />
            <Text className="text-2xl font-bold">Minhas Tarefas</Text>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <CreateTaskButton />
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
                <TaskCard task={task} key={task.id} onToggle={onToggle} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
