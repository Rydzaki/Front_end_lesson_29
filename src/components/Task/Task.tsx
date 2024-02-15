import { TaskForm } from "../../types/TaskForm"
import s from "./style.module.css"

type Props = TaskForm & {changeTask:Function, removeTask:Function}

export default function Task({id, taskName, status, changeTask, removeTask}: Props) {
  return (
    <div className={s.item}>
        <p>Number of task: {id}</p>
        <p>Title of task: {taskName}</p>
        <p>status of task: {status}</p>
        <button onClick={() => changeTask(id)}>Change the task</button>
        <button onClick={() => removeTask(id)}>Remove the task</button>

        
    </div>
  )
}