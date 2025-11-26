import { Text } from "../common/Text";
import icon from "../../../public/icon.png";

/*
This component displays the title section for the task management application, including an icon and a subtitle.
*/
export const TaskTitle = () => {
  const iconSize: number = 160;

  return (
    <div className="flex items-center flex-col gap-y-2 mb-[0.5rem] mt-[1rem]">
      <div className="flex gap-x-2 items-center">
        <img src={icon} alt="App Icon" width={iconSize} height={iconSize} />
      </div>
      <Text className="text-white">
        Organize suas tarefas de forma simples e eficiente!
      </Text>
    </div>
  );
};
