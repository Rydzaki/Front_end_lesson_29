import { useState } from "react";
import { TaskForm } from "./types/TaskForm";
import TaskManager from "./components/TaskManager/TaskManager";

function App() {
    const defaultTasks: TaskForm[] = [
      { id: 1, taskName: "Сходить на работу", status: "Не выполнено" },
      { id: 2, taskName: "Сходить в магазин", status: "Не выполнено" },
      { id: 3, taskName: "Обед", status: "Выполнено" },
      { id: 4, taskName: "Поиграть в плойку", status: "Не выполнено" },
      { id: 5, taskName: "Написать супер код", status: "Выполнено" },
    ];

    const [tasksNow, setTasks] = useState<TaskForm[]>(defaultTasks);
    
    const changeTask = (value: number): void => {
      const updatedTasks = tasksNow.map(task =>
        task.id === value ? { ...task, status: task.status === "Выполнено" ? "Не выполнено" : "Выполнено" } : task
      );
      setTasks(updatedTasks);
    };

    const removeTask = (value:number):void => setTasks(tasksNow.filter(({id}) => id !==value))

    const handlers = { changeTask,  removeTask};

    return (
      <div>
        <TaskManager tasks={tasksNow} {...handlers} />
      </div>
    );
}

export default App;
