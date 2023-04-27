import styles from './Result.module.css';

import React, { FC, ReactElement } from 'react';

const Result: FC = (): ReactElement => {
  return (
    <div className={styles.result_container}>
      <div className={styles.tipAmount}>
        <div>
          <h3>Tip Amount</h3>
          <p>/ person</p>
        </div>
        <div>
          <h2>$4.28</h2>
        </div>
      </div>
      <div className={styles.total}>
        <div>
          <h3>Total</h3>
          <p>/ person</p>
        </div>
        <div>
          <h2>$4.28</h2>
        </div>
      </div>
      <div className={styles.button_container}>
        <button>RESET</button>
      </div>
    </div>
  );
};

export default Result;
