import styles from './Result.module.css';

import React, { FC, ReactElement } from 'react';
import { TResult } from './types/types';
import Button from '../UI/Button';

const Result: FC<TResult> = ({
  amountValue,
  totalValue,
  reset,
}): ReactElement => {
  return (
    <div className={styles.result_container}>
      <div className={styles.tipAmount}>
        <div>
          <h3>Tip Amount</h3>
          <p>/ person</p>
        </div>
        <div>
          <h2>${amountValue}</h2>
        </div>
      </div>
      <div className={styles.total}>
        <div>
          <h3>Total</h3>
          <p>/ person</p>
        </div>
        <div>
          <h2>${totalValue}</h2>
        </div>
      </div>
      <div className={styles.button_container}>
        <Button value="RESET" onClick={reset} />
      </div>
    </div>
  );
};

export default Result;
