import styles from './Tip.module.css';
import React, { FC, ReactElement } from 'react';

type ButtonProps = {
  value: number;
};

const Button: FC<ButtonProps> = ({ value }): ReactElement => {
  return <button>{value}$</button>;
};

const tipsChoices = [
  {
    value: 5,
  },
  {
    value: 10,
  },
  {
    value: 15,
  },
  {
    value: 25,
  },
  {
    value: 50,
  },
];

const Tip: FC = (): ReactElement => {
  return (
    <div className={styles.tip_container}>
      <h3>Select Tip %</h3>
      <div className={styles.tips_container}>
        {tipsChoices.map((tip) => (
          <Button key={tip.value} value={tip.value} />
        ))}
        <input type="number" placeholder="Custom" />
      </div>
    </div>
  );
};

export default Tip;
