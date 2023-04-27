import { useReducer } from 'react';

type State = {
  bill: number;
  tip: number;
  people: number;
};

type Action = {
  type: 'SET_BILL' | 'SET_TIP' | 'SET_PEOPLE' | 'RESET';
  payload: number;
};

const initialState: State = {
  bill: 0,
  tip: 0,
  people: 0,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_BILL':
      return { ...state, bill: action.payload };
    case 'SET_TIP':
      return { ...state, tip: action.payload };
    case 'SET_PEOPLE':
      return { ...state, people: action.payload };
    case 'RESET':
      return { ...state, bill: 0, tip: 0, people: 0 };
    default:
      return state;
  }
};

const useTipCalculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setBill = (bill: number) => {
    dispatch({ type: 'SET_BILL', payload: bill });
  };

  const setTip = (tip: number) => {
    dispatch({ type: 'SET_TIP', payload: tip });
  };

  const setPeople = (people: number) => {
    dispatch({ type: 'SET_PEOPLE', payload: people });
  };

  const reset = () => {
    dispatch({ type: 'RESET', payload: 0 });
  };

  return {
    state,
    setBill,
    setTip,
    setPeople,
    reset,
  };
};

export default useTipCalculator;
