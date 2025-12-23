import React from 'react';
import Styles from './Name.module.css';
import MinePage from './minePage';
import Select from './Select';

export default function Name() {
  return (
    <div>
      <header>
        <h1 className={Styles.batt}>Battleships</h1>
      </header>
      <MinePage />
      <Select />
    </div>
  );
}
