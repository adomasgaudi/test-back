import { configureStore, combineReducers } from "@reduxjs/toolkit";
import symbioteApi from "../ReduxApi/api";

const rootReducer = combineReducers({
  [symbioteApi.reducerPath]: symbioteApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
