import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UIState {
  loading: boolean;
  isMobileMenuOpen: boolean;
  isScrolled: boolean;
  lightboxIndex: number | null;
  showWhatsAppTooltip: boolean;
  toast: { message: string; type: 'success' | 'error' } | null;
}

const initialState: UIState = {
  loading: true,
  isMobileMenuOpen: false,
  isScrolled: false,
  lightboxIndex: null,
  showWhatsAppTooltip: false,
  toast: null,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    // Controls the global entry preloader
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    // Controls the mobile sidebar nav toggle
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMobileMenuOpen = action.payload;
    },
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    // Triggers navigation bar styling transformations on scroll
    setScrolled: (state, action: PayloadAction<boolean>) => {
      state.isScrolled = action.payload;
    },
    // Handles the active photo details lightbox overlay in Gallery component
    setLightboxIndex: (state, action: PayloadAction<number | null>) => {
      state.lightboxIndex = action.payload;
    },
    // Handles floating tooltip animation toggle for WhatsApp support chat
    setWhatsAppTooltip: (state, action: PayloadAction<boolean>) => {
      state.showWhatsAppTooltip = action.payload;
    },
    // Global toast notifier (success or error message layouts)
    setToast: (state, action: PayloadAction<{ message: string; type: 'success' | 'error' } | null>) => {
      state.toast = action.payload;
    },
  },
});

export const {
  setLoading,
  setMobileMenuOpen,
  toggleMobileMenu,
  setScrolled,
  setLightboxIndex,
  setWhatsAppTooltip,
  setToast,
} = uiSlice.actions;

export default uiSlice.reducer;
