import React, { useState } from 'react';
import Styles from './Numbers.module.css';

export default function Numbers() {
  const [active, setActive] = useState(null);

  const numbers = [6, 7, 8, 9, 10, 11, 12];

  return (
    <div className={Styles.number}>
      {numbers.map((num) => (
        <div
          key={num}
          className={`${Styles.box} ${active === num ? Styles.active : ''}`}
          onClick={() => setActive(active === num ? null : num)}
        >
          {num}
        </div>
      ))}
    </div>
  );
}
