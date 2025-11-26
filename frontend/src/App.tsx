import { Route, Routes } from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";
import { Toaster } from "sonner";
import { TasksProvider } from "./contexts/TasksContext";

function App() {
  return (
    <>
      <Toaster richColors />
      <TasksProvider>
        <Routes>
          <Route index element={<TasksPage />} />
        </Routes>
      </TasksProvider>
    </>
  );
}

export default App;
