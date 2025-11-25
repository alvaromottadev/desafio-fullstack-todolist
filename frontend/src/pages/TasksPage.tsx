import { StatsCard, TaskTitle } from "../components/tasks";

export const TasksPage = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-[var(--background-color)]">
      <TaskTitle />
      <div className="flex flex-col md:flex-row w-full items-center justify-center">
        <StatsCard value={1} label="Tarefas Criadas" />
        <StatsCard value={0} label="Tarefas Concluidas" />
        <StatsCard value={0} label="Tarefas Pendentes" />
      </div>
    </div>
  );
};
