import type { TaskResponseDTO } from "@/types/TaskResponseDTO";
import { Text } from "../common/Text";
import { ListTodo } from "lucide-react";
import { CreateTaskButton } from "./CreateTaskButton";

interface TTasksDisplayProps {
  tasks: TaskResponseDTO[];
}

export const TasksDisplay = ({ tasks }: TTasksDisplayProps) => {
  return (
    <div className="flex items-center justify-center w-[90%] lg:w-[47rem] min-h-[20rem] bg-white rounded-[0.5rem] mt-2">
      {tasks.length === 0 ? (
        <div className="flex flex-col items-center w-full gap-y-2">
          <ListTodo size={68} className="text-[var(--primary-color)]" />
          <Text className="text-[var(--primary-color)] font-bold">
            Você não tem tarefas cadastradas
          </Text>
          <CreateTaskButton />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
