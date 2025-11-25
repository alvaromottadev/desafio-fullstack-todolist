import { Route, Routes } from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster richColors />
      <Routes>
        <Route index element={<TasksPage />} />
      </Routes>
    </>
  );
}

export default App;
