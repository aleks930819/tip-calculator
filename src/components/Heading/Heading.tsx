import React, { FC, ReactElement } from 'react';

import styles from './Heading.module.css';

const Heading: FC = (): ReactElement => {
  return (
    <div className={styles.heading}>
      <h2>SPLI</h2>
      <h2>TTER</h2>
    </div>
  );
};

export default Heading;
