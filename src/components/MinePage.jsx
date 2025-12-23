import React from 'react';
import Styles from './MinePage.module.css';
import Numbers from './Numbers';

export default function minePage() {
  return (
    <div>
      <div className={Styles.mine}>
        <div className="">
          <h4>Select Ocean Size</h4>
          <p>Number of squares wide and high</p>
        </div>
      </div>
      <Numbers />
    </div>
  );
}
