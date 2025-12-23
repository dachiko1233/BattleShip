import React from 'react';
import Styles from './Select.module.css';
import Courent from './Courent';

export default function Select() {
  return (
    <section className={Styles.container}>
      <h2 className={Styles.title}>Select Battleships</h2>

      <div className={Styles.grid}>
        <Ship label="CA" count={5} name="Carrier" />
        <Ship label="B" count={4} name="Battleship" />
        <Ship label="C" count={3} name="Cruiser" />
        <Ship label="S" count={3} name="Submarine" />
        <Ship label="D" count={2} name="Destroyer" />
      </div>
    </section>
  );
}

/* Ship */
function Ship({ label, count, name }) {
  return (
    <div className={Styles.ship}>
      <div className={Styles.shipGrid}>
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={`${Styles.cell} ${Styles[label.toLowerCase()]}`}
          >
            {label}
          </div>
        ))}
      </div>
      <span className={Styles.shipName}>{name}</span>
      <Courent />
    </div>
  );
}
