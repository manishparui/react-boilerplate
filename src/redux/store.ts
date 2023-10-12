import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slice/counterSlice';

const store = configureStore({
  reducer: {
    [counterSlice.name]: counterSlice.reducer // Add your reducer here
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
