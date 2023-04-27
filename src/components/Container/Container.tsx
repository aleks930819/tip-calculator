import React, { FC, ReactElement } from 'react';

import styles from './Container.module.css';

import useTipCalculator from '../../hooks/useTipCalculatorReducer';

import Bill from '../Bill/Bill';
import NumberOfPeople from '../NumberOfPeople/NumberOfPeople';
import Result from '../Result/Result';
import Tip from '../Tip/Tip';

const Container: FC = (): ReactElement => {
  const { state, setPeople, setBill, setTip, reset } = useTipCalculator();
  const [amount, setAmount] = React.useState<string>('0.00');
  const [total, setTotal] = React.useState<string>('0.00');

  React.useEffect(() => {
    if (state.bill === 0 || state.people === 0) {
      setAmount('0.00');
      setTotal('0.00');
      return;
    }

    const tipAmount = (state.bill * state.tip) / 100;
    const totalAmount = state.bill + tipAmount;
    const amountPerPerson = tipAmount / state.people;
    const totalPerPerson = totalAmount / state.people;

    setAmount(amountPerPerson.toFixed(2));
    setTotal(totalPerPerson.toFixed(2));
  }, [state]);

  return (
    <div className={styles.container}>
      <div>
        <Bill setBill={setBill} bill={state.bill} />
        <Tip setTip={setTip} />
        <NumberOfPeople setPeople={setPeople} people={state.people} />
      </div>
      <div className={styles.result_wrapper}>
        <Result amountValue={amount} totalValue={total} reset={reset} />
      </div>
    </div>
  );
};

export default Container;
