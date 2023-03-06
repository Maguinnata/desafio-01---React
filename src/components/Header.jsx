import styles from "./Header.module.css";

import rocketLogo from "../assets/rocketLogo.svg";
import plusLogo from "../assets/plusLogo.svg";
import { useState } from "react";

export function Header({ task, handleCreateTask }) {

const [desafio, setDesafio] = useState("")

function createNewCardTask () {
  event.preventDefault()
  handleCreateTask(desafio)
  setDesafio("")
}

function handleNewTaskChange () {
  setDesafio(event.target.value)
}

  return (
    <header className={styles.background}>
      <div className={styles.logo}>
        <div className={styles.logoImage}>
          <img src={rocketLogo} alt="Logotipo de um foguete" />
        </div>
        <div className={styles.logoText}>
          <p>to</p>
          <span>do</span>
        </div>
      </div>

      <div>
      <form className={styles.newTask} onSubmit={createNewCardTask}>
        <input
            placeholder="Adicione uma nova tarefa"
            type="text" 
            className={styles.inputTask}
            value={desafio}
            onChange={handleNewTaskChange}
            required
        />
        <button className={styles.buttonTask}>
          Criar
          <img src={plusLogo} alt="Sinal de mais" />
        </button>
      </form>
    </div>
    </header>
  );
}
