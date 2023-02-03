import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Loading } from "../../utils/helpers/constants";
import UserService from "../../utils/services/user.service";

export const fetchUserById = createAsyncThunk('user/fetchUserById', async (id) => {
  const { data: responseData } = await UserService.getUserById(id);
  return responseData.data;
});

export const fetchUserByEmail = createAsyncThunk('user/fetchUserByEmail', async (email) => {
  const { data: responseData } = await UserService.getUserByEmail(email);
  return responseData.data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    loadingUser: "",
    error: null
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUserById.pending, (state, action) => {
        state.loadingUser = Loading.FETCHING
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loadingUser = Loading.SUCCESS
        state.user = action.payload
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loadingUser = Loading.FAILED
        state.error = action.error.message
      })
      .addCase(fetchUserByEmail.pending, (state, action) => {
        state.loadingUser = Loading.FETCHING
      })
      .addCase(fetchUserByEmail.fulfilled, (state, action) => {
        state.loadingUser = Loading.SUCCESS
        state.user = action.payload
      })
      .addCase(fetchUserByEmail.rejected, (state, action) => {
        state.loadingUser = Loading.FAILED
        state.error = action.error.message
      })
  }
});

export default userSlice.reducer;