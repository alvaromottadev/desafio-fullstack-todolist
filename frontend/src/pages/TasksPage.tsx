import { StatsCard, TasksDisplay, TaskTitle } from "../components/tasks";
import { useTasks } from "../hooks/useTasks";

export const TasksPage = () => {
  const { stats, tasks, updateTask } = useTasks();

  const handleToggleTask = async (taskId: string) => {
    const task = tasks.find((t) => t.id === taskId);
    if (task) {
      await updateTask(taskId, { isDone: !task.isDone });
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-[var(--background-color)] p-2">
      <TaskTitle />
      <div className="flex flex-col md:flex-row w-full items-center justify-center">
        <StatsCard value={stats.total} label="Tarefas Criadas" />
        <StatsCard value={stats.completed} label="Tarefas Concluidas" />
        <StatsCard value={stats.pending} label="Tarefas Pendentes" />
      </div>
      <TasksDisplay tasks={tasks} onToggle={handleToggleTask} />
    </div>
  );
};
