import { configureStore } from '@reduxjs/toolkit';
import { authApi,loginApi, getUserDetailsApi } from './services/customerService';
import authReducers from './features/authSlice'

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [getUserDetailsApi.reducerPath] : getUserDetailsApi.reducer,
    auth : authReducers,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(
    authApi.middleware,
    loginApi.middleware,
    getUserDetailsApi.middleware
  ),  
});

export default store;
