import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    incrementBy: (state, action) => state + action.payload,
    decrement: (state) => state - 1
  }
});

export const useCounter = () => {
  const dispatch = useDispatch();
  const { increment, incrementBy, decrement } = counterSlice.actions;
  const counterDispatch = {
    increment: () => dispatch(increment()),
    incrementBy: (data: unknown) => dispatch(incrementBy(data)),
    decrement: () => dispatch(decrement())
  };
  return { ...counterDispatch };
};

export default counterSlice;
