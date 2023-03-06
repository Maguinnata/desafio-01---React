import { Header } from "./components/Header";
import { List } from "./components/List";
import { v4 as uuidv4 } from 'uuid';

import "./global.css";
import { useState } from "react";

export function App() {
  const [task, setTask] = useState([])

  function handleCreateTask (desafio) {
    setTask([...task, {id: uuidv4(), desafio: desafio, isCheck: false}])
  }

  function handleCheckTask (taskTarget) {
    const taskCheck = task.map(item => {
      if (item.id === taskTarget) {
        return {...item, check: !item.check}
      } return item
    })
    setTask(taskCheck)
  }

  function handleDeleteTask (tasksToDelete) {
    const listWithoutDeletedOne = task.filter(task => {
      return task != tasksToDelete
    })
    setTask(listWithoutDeletedOne)
  }

  return (
    <div>
      <div>
        <Header
          handleCreateTask={handleCreateTask}
        />
      </div>
        <List 
          task={task}
          handleCheckTask= {handleCheckTask}
          handleDeleteTask={handleDeleteTask}
        />
    </div>
  );
}
