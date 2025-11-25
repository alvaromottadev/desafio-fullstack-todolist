import { Button } from "../ui/button";

export const CreateTaskButton = () => {
  return (
    <Button className="w-[90%] md:w-[15rem] bg-[var(--primary-color)] text-white font-bold py-2 px-4 hover:-translate-y-1 transition-transform duration-200 rounded cursor-pointer">
      Criar Tarefa
    </Button>
  );
};
