import styles from './Tip.module.css';
import React, { FC, ReactElement } from 'react';
import { TTip } from './types/types';
import Button from '../UI/Button';

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

const Tip: FC<TTip> = ({ setTip }): ReactElement => {
  const [customTip, setCustomTip] = React.useState<number>(0);

  const handleClick = (value: number): void => {
    setTip(value);
  };

  React.useEffect(() => {
    if (customTip) {
      setTip(customTip);
    }
  }, [customTip]);

  return (
    <div className={styles.tip_container}>
      <h3>Select Tip %</h3>
      <div className={styles.tips_container}>
        {tipsChoices.map((tip) => (
          <Button
            key={tip.value}
            value={`${tip.value}%`}
            onClick={() => handleClick(tip.value)}
          ></Button>
        ))}
        <input
          type="number"
          placeholder="Custom"
          onChange={(e) => setCustomTip(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default Tip;
