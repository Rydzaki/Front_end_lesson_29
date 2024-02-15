import React from 'react'
import { TaskForm } from '../../types/TaskForm'
import Task from '../Task/Task';
import s from "./style.module.css"

type Props = {
    tasks:TaskForm[],
    changeTask:Function,
    removeTask:Function
}

export default function TaskManager({tasks, changeTask, removeTask}: Props) {
    const handlers = {changeTask, removeTask}
    return (
        <div className={s.tasks}>
          {tasks.map((task) => (
            <Task key={task.id} {...task}
            {...handlers} />
          ))}
        </div>
      );
    };
    