import { Route, Routes } from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";

function App() {
  return (
    <Routes>
      <Route index element={<TasksPage />} />
    </Routes>
  );
}

export default App;
