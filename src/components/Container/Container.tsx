import styles from './Container.module.css';

import React, { FC, ReactElement } from 'react';

const Container: FC = (): ReactElement => {
  return <div className={styles.container}></div>;
};

export default Container;
