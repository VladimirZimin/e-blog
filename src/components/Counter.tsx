import { useState } from "react";

import styles from "./Counter.module.scss";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className={styles.div}>
      <button className={styles.button} onClick={() => setCounter(counter + 1)}>
        +
      </button>
      <h1 className={styles.h1}>{counter}</h1>
      <button className={styles.button} onClick={() => setCounter(counter - 1)}>
        -
      </button>
    </div>
  );
};

export default Counter;
