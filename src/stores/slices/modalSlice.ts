import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  openModals: Record<string, boolean>;
}

const initialState: ModalState = { openModals: {} };

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<string>) => {
      state.openModals[action.payload] = true;
    },
    closeModal: (state, action: PayloadAction<string>) => {
      state.openModals[action.payload] = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
