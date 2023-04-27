import Bill from '../Bill/Bill';
import NumberOfPeople from '../NumberOfPeople/NumberOfPeople';
import Result from '../Result/Result';
import Tip from '../Tip/Tip';
import styles from './Container.module.css';

import React, { FC, ReactElement } from 'react';

const Container: FC = (): ReactElement => {
  return (
    <div className={styles.container}>
      <div>
        <Bill />
        <Tip />
        <NumberOfPeople />
      </div>
      <div className={styles.result_wrapper}>
        <Result />
      </div>
    </div>
  );
};

export default Container;
