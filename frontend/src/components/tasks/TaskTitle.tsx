import { ClipboardCheck } from "lucide-react";
import { Title } from "../common/Title";
import { Text } from "../common/Text";
export const TaskTitle = () => {
  const iconSize: number = 40;

  return (
    <div className="flex items-center flex-col gap-y-2">
      <div className="flex gap-x-2">
        <ClipboardCheck size={iconSize} color="white" />
        <Title className="text-white  text-shadow-2xl">Task Manager</Title>
      </div>
      <Text className="text-white">
        Organize suas tarefas de forma simples e eficiente!
      </Text>
    </div>
  );
};
