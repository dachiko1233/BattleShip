import React from 'react';
import Styles from './GamePage.module.css';

export default function GamePage() {
  const letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className={Styles.container}>
      {letters.map((letter, index) => (
        <div key={`header- ${index} `} className={Styles.lebelCell}>
          {letter}
        </div>
      ))}

      {numbers.map((num) => (
        <React.Fragment key={`row${num}`}>
          <div className={Styles.lableCell}>{num}</div>

          {letters.slice(1).map((letters) => (
            <div
              key={`${letters} ${num}`}
              className={Styles.cell}
              onClick={() => console.log(`Clicked: ${letters} ${num}`)}
            >
              {/* {gemebi shigniT} */}
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
