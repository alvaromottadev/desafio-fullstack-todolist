import { Text } from "../common/Text";
import { ClipboardCheck, ListTodo } from "lucide-react";
import { TaskDialog, TaskCard, FilterTask } from "./index";
import { Button } from "../ui/button";
import { useTasksContext } from "@/hooks/useTasksContext";

/*
This component displays a list of tasks with options to create, update, and remove tasks.
*/
export const TasksDisplay = () => {
  const {
    filteredTasks,
    createTask,
    updateTask,
    removeTask,
    isLoading,
    filter,
    setFilter,
  } = useTasksContext();

  const onToggle = async (taskId: string) => {
    const task = filteredTasks.find((t) => t.id === taskId);
    if (task) {
      await updateTask(taskId, { isDone: !task.isDone });
    }
  };

  return (
    <div className="w-[90%] lg:w-[50rem] max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] p-6">
          <div className="flex items-center gap-3 text-white">
            <ClipboardCheck size={28} />
            <Text className="text-2xl font-bold">Minhas Tarefas</Text>
          </div>
        </div>

        <FilterTask filter={filter} setFilter={setFilter} />

        <div className="p-6">
          <div className="mb-6">
            <TaskDialog
              initialTaskDto={null}
              onCreate={createTask}
              onUpdate={updateTask}
              isLoading={isLoading}
            >
              <Button className="w-full bg-[var(--primary-color)] hover:bg-[var(--primary-color-hover)] bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] text-white font-bold py-2 px-4 hover:-translate-y-1 transition-transform duration-200 rounded cursor-pointer">
                Criar Tarefa
              </Button>
            </TaskDialog>
          </div>

          {filteredTasks.length === 0 ? (
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
              {filteredTasks.map((task) => (
                <TaskCard
                  onRemove={removeTask}
                  onUpdate={updateTask}
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
