import React, { useState } from 'react';
import Styles from './Courent.module.css';

export default function Courent({ maxLimit = 3, minLimit = 0 }) {
  const [count, setCount] = useState(0);

  function handleIni() {
    if (count < maxLimit) {
      setCount((prev) => prev + 1);
    }
  }

  function handleDec() {
    if (count > minLimit) {
      setCount((prev) => prev - 1);
    }
  }

  return (
    <div className={Styles.count}>
      <button className={Styles.btn} onClick={handleDec}>
        <ion-icon
          className={Styles.icon}
          name="chevron-back-outline"
        ></ion-icon>
      </button>
      <h2 className={Styles.text}>{count}</h2>
      <button
        className={Styles.btn}
        onClick={handleIni}
        disabled={count === maxLimit}
      >
        <ion-icon
          className={Styles.icon}
          name="chevron-forward-outline"
        ></ion-icon>
      </button>
    </div>
  );
}
