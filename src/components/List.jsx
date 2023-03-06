import { useState } from "react";
import { ClipboardText } from "phosphor-react";
import { Task } from "./Task";
import styles from "./List.module.css";

export function List({ task, handleCheckTask, handleDeleteTask }) {
  const taskTotal = task.length;
  const taskCompleted = task.filter((item) => item.check).length;

  return (
    <div className={styles.list}>
      <header className={styles.headerList}>
        <div className={styles.taskCreated}>
          <p>Tarefas Criadas</p> <span>{taskTotal}</span>
        </div>
        <div className={styles.taskFinished}>
          <p>Concluídas</p> <span>{taskCompleted} de {taskTotal}</span>
        </div>
      </header>

      {task.map((item) => {
        return (
        <Task
          content={item}
          task={item}
          handleCheckTask = {handleCheckTask}
          handleDeleteTask = {handleDeleteTask}
          key={item.id}
        />)
      })}

      {task.length <= 0 && (
        <div className={styles.emptyList}>
          <ClipboardText size={56} weight="thin" />
          <p>
            <strong>Você ainda não tem tarefas cadastradas.</strong>
            Crie tarefas e organize seus itens a fazer.
          </p>
        </div>
      )}
    </div>
  );
}
