import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slice/counterSlice';
import userSlice from './slice/userSlice';

const store = configureStore({
  reducer: {
    [counterSlice.name]: counterSlice.reducer,
    [userSlice.name]: userSlice.reducer
  }
});

export default store;
export type IState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
