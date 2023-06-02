import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    questions: [],
    currentQuestionIndex: 0,
    playerAnswers: {}
  },

  reducers: {
    setQuestions: (state, action) => state.questions = action.payload,
    goToNextQuestion: (state) => state.currentQuestionIndex += 1,
    goToPrevQuestion: (state) => state.currentQuestionIndex -= 1,
    savePlayerAnswer: (state, action) => {
      const { questionId, answer } = action.payload;
      state.playerAnswers[questionId] = answer;
    }
  }
});

export const { setQuestions, goToNextQuestion, goToPrevQuestion } = quizSlice.actions;

export default quizSlice.reducer;