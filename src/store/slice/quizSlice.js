import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Loading } from "../../utils/helpers/constants";
import QuizService from "../../utils/services/quiz.service";

export const fetchQuestionsByUserId = createAsyncThunk('quiz/fetchQuestionsByUserId', async (userId) => {
  const { data: responseData } = await QuizService.getQuestionsByUserId(userId);
  return responseData.data;
});

export const fetchQuestionsByQuizId = createAsyncThunk('quiz/fetchQuestionsByQuizId', async (quizId) => {
  const { data: responseData } = await QuizService.getQuestionsByQuizId(quizId);
  return responseData.data;
});

export const fetchQuestionByCode = createAsyncThunk('quiz/fetchQuestionByCode', async (quizCode) => {
  const { data: responseData } = await QuizService.getQuestionByCode(quizCode);
  return responseData.data;
});

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    question: {}, userQuestions: {}, quizQuestions: {},
    loadingQuestion: "", loadingUserQuestions: "", loadingQuizQuestions: "",
    questionError: null, userQuestionsError: null, quizQuestionsError: null
  },

  extraReducers(builder) {
    builder
    .addCase(fetchQuestionByCode.pending, (state, action) => {
      state.loadingQuestion = Loading.FETCHING
    })
    .addCase(fetchQuestionByCode.fulfilled, (state, action) => {
      state.loadingQuestion = Loading.SUCCESS
      state.question = action.payload
    })
    .addCase(fetchQuestionByCode.rejected, (state, action) => {
      state.loadingQuestion = Loading.FAILED
      state.questionError = action.error.message
    })

    .addCase(fetchQuestionsByQuizId.pending, (state, action) => {
      state.loadingQuizQuestions = Loading.FETCHING
    })
    .addCase(fetchQuestionsByQuizId.fulfilled, (state, action) => {
      state.loadingQuizQuestions = Loading.SUCCESS
      state.quizQuestions = action.payload
    })
    .addCase(fetchQuestionsByQuizId.rejected, (state, action) => {
      state.loadingQuizQuestions = Loading.FAILED
      state.quizQuestionsError = action.error.message
    })

    .addCase(fetchQuestionsByUserId.pending, (state, action) => {
      state.loadingUserQuestions = Loading.FETCHING
    })
    .addCase(fetchQuestionsByUserId.fulfilled, (state, action) => {
      state.loadingUserQuestions = Loading.SUCCESS
      state.userQuestions = action.payload
    })
    .addCase(fetchQuestionsByUserId.rejected, (state, action) => {
      state.loadingUserQuestions = Loading.FAILED
      state.userQuestionsError = action.error.message
    })
  }
});

export default quizSlice.reducer;