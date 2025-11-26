import { StatsCard, TasksDisplay, TaskTitle } from "../components/tasks";
import { useTasksContext } from "@/hooks/useTasksContext";

export const TasksPage = () => {
  const { stats } = useTasksContext();

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-linear-to-r from-[var(--primary-color)] to-[var(--accent-color)] p-2">
      <TaskTitle />
      <div className="flex flex-col w-full lg:flex-row lg:w-[50rem] items-center gap-y-2 lg:gap-x-2 mb-6 ">
        <StatsCard value={stats.total} label="Tarefas Criadas" />
        <StatsCard value={stats.completed} label="Tarefas Concluidas" />
        <StatsCard value={stats.pending} label="Tarefas Pendentes" />
      </div>
      <TasksDisplay />
    </div>
  );
};
