import React, { FC, ReactElement } from 'react';
import { TButton } from './types/types';

const Button: FC<TButton> = ({ value, ...rest }): ReactElement => {
  return <button {...rest}>{value}</button>;
};

export default Button;
