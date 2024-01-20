import { configureStore } from '@reduxjs/toolkit';
import { authApi,loginApi, getUserDetailsApi,updateUserApi} from './services/customerService';
import authReducers from './features/authSlice'
import { serviceDetApi,addOrUpdateService,deleteServiceApi } from './services/serviceMaster';
import { requestServiceApi } from './services/customerServiceDets';

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [updateUserApi.reducerPath]: updateUserApi.reducer,
    [getUserDetailsApi.reducerPath] : getUserDetailsApi.reducer,
    [serviceDetApi.reducerPath] : serviceDetApi.reducer,
    [addOrUpdateService.reducerPath] : addOrUpdateService.reducer,
    [deleteServiceApi.reducerPath] : deleteServiceApi.reducer,
    [requestServiceApi.reducerPath] : requestServiceApi.reducer,
    auth : authReducers,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(
    authApi.middleware,
    loginApi.middleware,
    getUserDetailsApi.middleware,
    updateUserApi.middleware,  
    serviceDetApi.middleware,
    addOrUpdateService.middleware,
    deleteServiceApi.middleware,
    requestServiceApi.middleware,
    ),  
});


export default store;
