import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";
import userReducer from "./slices/userSlice";
import snackbarReducer from "./slices/snackbarSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    user: userReducer,
    snackbar: snackbarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
