import React, { FC, ReactElement } from 'react';
import Container from './components/Container/Container';
import Heading from './components/Heading/Heading';

const App: FC = (): ReactElement => {
  return (
    <div className="wrapper">
      <div>
        <Heading />
      </div>
      <div>
        <Container />
      </div>
    </div>
  );
};

export default App;
