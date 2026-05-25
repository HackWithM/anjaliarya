import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ContactFormFields {
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  product: string;
  message: string;
}

export interface ContactState {
  formData: ContactFormFields;
  isSubmitting: boolean;
  successMsg: boolean;
  errorMsg: string;
}

const initialState: ContactState = {
  formData: {
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    product: '',
    message: '',
  },
  isSubmitting: false,
  successMsg: false,
  errorMsg: '',
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    // Updates a specific input field value inside the contact form dynamically
    updateField: (state, action: PayloadAction<{ name: keyof ContactFormFields; value: string }>) => {
      state.formData[action.payload.name] = action.payload.value;
    },
    // Controls submission spinner and disabled triggers
    setSubmitting: (state, action: PayloadAction<boolean>) => {
      state.isSubmitting = action.payload;
    },
    // Triggers successful dispatch page frame swap
    setSuccessMsg: (state, action: PayloadAction<boolean>) => {
      state.successMsg = action.payload;
    },
    // Stores dynamic error logs from validations or transmission services
    setErrorMsg: (state, action: PayloadAction<string>) => {
      state.errorMsg = action.payload;
    },
    // Restores initial clean form state
    resetForm: (state) => {
      state.formData = {
        name: '',
        email: '',
        phone: '',
        company: '',
        country: '',
        product: '',
        message: '',
      };
      state.isSubmitting = false;
      state.successMsg = false;
      state.errorMsg = '';
    },
  },
});

export const { updateField, setSubmitting, setSuccessMsg, setErrorMsg, resetForm } = contactSlice.actions;

export default contactSlice.reducer;
