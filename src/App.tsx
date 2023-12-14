import { useState } from "react";
import { mockedTasks } from "./utils";

import TodoList, { Task } from "./components/TodoList";
import Modal from "./components/Modal";
import TaskInput from "./components/TaskInput";

function App() {
  const [tasks, setTasks] = useState(mockedTasks);

  const handleSaveTask = (tasks: Task[]) => {
    setTasks(tasks);
  };

  return (
    <>
      <main className="p-4">
        <TaskInput tasks={tasks} onSave={handleSaveTask} />
        <Modal />
        <TodoList tasks={tasks} />
      </main>
    </>
  );
}

export default App;
