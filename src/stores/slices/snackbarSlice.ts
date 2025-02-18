import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SnackbarState {
  message: string;
  variant: "success" | "error" | "warning" | "info";
  isOpen: boolean;
}

const initialState: SnackbarState = {
  message: "",
  variant: "success",
  isOpen: false,
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    showSnackbar: (
      state,
      action: PayloadAction<Omit<SnackbarState, "isOpen">>
    ) => {
      state.message = action.payload.message;
      state.variant = action.payload.variant;
      state.isOpen = true;
    },
    hideSnackbar: (state) => {
      state.isOpen = false;
    },
  },
});

export const { showSnackbar, hideSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
