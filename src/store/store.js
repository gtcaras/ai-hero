import { configureStore } from '@reduxjs/toolkit';
import tutorialReducer from './tutorialSlice';
import authReducer from './authSlice';
export default configureStore({ reducer: { tutorial: tutorialReducer, auth: authReducer } });