import { StatsCard, TaskTitle } from "../components/tasks";
import { useTasks } from "../hooks/useTasks";

export const TasksPage = () => {
  const { stats } = useTasks();
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-[var(--background-color)]">
      <TaskTitle />
      <div className="flex flex-col md:flex-row w-full items-center justify-center">
        <StatsCard value={stats.total} label="Tarefas Criadas" />
        <StatsCard value={stats.completed} label="Tarefas Concluidas" />
        <StatsCard value={stats.pending} label="Tarefas Pendentes" />
      </div>
    </div>
  );
};
