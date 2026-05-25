import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContactFormFields } from '../contact/contactSlice';

export interface InquiryItem extends ContactFormFields {
  id: string;
  submittedAt: string;
}

export interface InquiryState {
  submittedInquiries: InquiryItem[];
}

const initialState: InquiryState = {
  submittedInquiries: [],
};

export const inquirySlice = createSlice({
  name: 'inquiry',
  initialState,
  reducers: {
    // Appends a new successful inquiry dispatch to session history
    addInquiry: (state, action: PayloadAction<InquiryItem>) => {
      state.submittedInquiries.push(action.payload);
    },
    // Clears logged history session entries
    clearInquiries: (state) => {
      state.submittedInquiries = [];
    },
  },
});

export const { addInquiry, clearInquiries } = inquirySlice.actions;

export default inquirySlice.reducer;
