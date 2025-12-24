import React from 'react';
import Styles from './Button.module.css';
import GamePage from './GamePage';

export default function Button() {
  return (
    <div>
      <link part="/gamepage" element={<GamePage />} className={Styles.btn}>
        start game
      </link>
    </div>
  );
}
