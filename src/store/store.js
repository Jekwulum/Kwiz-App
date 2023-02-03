import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/userSlice';
import quizReducer from './slice/quizSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    quiz: quizReducer
  }
});