import styles from './Heading.module.css';
import React, { FC, ReactElement } from 'react';

const Heading: FC = (): ReactElement => {
  return (
    <div className={styles.heading}>
      <h2>SPLI</h2>
      <h2>TTER</h2>
    </div>
  );
};

export default Heading;
