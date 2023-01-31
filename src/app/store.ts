import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import postsReducer from './slices/post.slice';

export const store = configureStore({
  reducer: {
    post:postsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
