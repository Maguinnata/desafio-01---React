import styles from "./Task.module.css";
import { Trash } from "phosphor-react";

export function Task({ task, content, handleCheckTask, handleDeleteTask }) {
  return (
    <div className={styles.taskList}>
    <div className={styles.taskContent}>
      <label className={styles.taskCheck}>
        <input type="checkbox" onClick={() => handleCheckTask(task.id)} />
        <span className={styles.checkIcon}></span>
      </label>
      <p>{content.desafio}</p>
      <button onClick={() => handleDeleteTask(content)}>
        <Trash size={24} />
      </button>
    </div>
  </div>
  );
}
