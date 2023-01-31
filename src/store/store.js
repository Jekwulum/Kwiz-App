import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../store/slice/userSlice';

export default configureStore({
  reducer: {
    user: userReducer
  }
});