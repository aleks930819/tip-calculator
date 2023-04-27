import Bill from '../Bill/Bill';
import NumberOfPeople from '../NumberOfPeople/NumberOfPeople';
import Result from '../Result/Result';
import Tip from '../Tip/Tip';
import styles from './Container.module.css';

import React, { FC, ReactElement } from 'react';

const Container: FC = (): ReactElement => {
  return (
    <div className={styles.container}>
      <Bill />
      <Tip />
      <NumberOfPeople />
      <Result />
    </div>
  );
};

export default Container;
