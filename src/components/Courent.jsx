import React, { useState } from 'react';
import Styles from './Courent.module.css';

export default function Courent() {
  const [count, setCount] = useState(0);

  return (
    <div className={Styles.count}>
      <button onClick={() => setCount(count - 1)}>
        <ion-icon
          className={Styles.icon}
          name="chevron-back-outline"
        ></ion-icon>
      </button>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>
        <ion-icon
          className={Styles.icon}
          name="chevron-back-outline"
        ></ion-icon>
      </button>
    </div>
  );
}
