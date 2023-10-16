import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

export interface IUser {
  username: string;
  accessToken: string | null;
}

const initialState: IUser = {
  username: '',
  accessToken: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.username = action.payload.username;
      state.accessToken = action.payload.accessToken;
    },
    signOut: () => {
      return initialState;
    }
  }
});

export const useUser = () => {
  const dispatch = useDispatch();
  const { signIn, signOut } = userSlice.actions;
  return {
    signIn: (data: IUser) => dispatch(signIn(data)),
    signOut: () => dispatch(signOut())
  };
};

export default userSlice;
