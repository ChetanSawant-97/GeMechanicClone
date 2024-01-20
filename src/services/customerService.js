import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const authToken = sessionStorage.getItem('accessToken');


export const authApi = createApi({
    reducerPath : 'registerUserApi',
    baseQuery : fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api/v1/auth/',
    }),
    endpoints : (builder) =>({
        registerUser : builder.mutation({
            query : (customerObj) =>({
                url:'register',
                method:"POST",
                body : customerObj,
            }),
        }),
        
    }),
});


export const loginApi = createApi({
    reducerPath : 'loginApi',
    baseQuery : fetchBaseQuery({baseUrl: 'http://localhost:8080/api/v1/auth/'}),
    endpoints : (builder) =>({
        loginUser : builder.mutation({
            query : (credentials) =>({
                url:'login',
                method:"POST",
                body : credentials,
            }),
        })
    }),
});


export const getUserDetailsApi = createApi({
    reducerPath: 'userDetApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://localhost:8080/api/v1/user/',
        headers: {
            Authorization: ('Bearer ' + authToken), 
        },
    }),
    endpoints: (builder) => ({
        getUser: builder.query({
        query: (username) => `profile?username=${username}`,
        }),
    }),
});


export const updateUserApi = createApi({
    reducerPath : 'updateUserApi',
    baseQuery : fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api/v1/user/',
        headers: {
            Authorization: ('Bearer ' + authToken), 
        },
    }),
    endpoints : (builder) =>({
        updateUser : builder.mutation({
            query : (userObj) =>({
                url:'updateProfile',
                method:"POST",
                body : userObj,
            }),
        }),
        
    }),
});


export const requestServiceApi = createApi({
    reducerPath : 'requestServiceApi',
    baseQuery : fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api/v1/customerServiceDet/',
        headers: {
            Authorization: ('Bearer ' + authToken), 
        },
    }),
    endpoints : (builder) =>({
        requestService : builder.mutation({
            query : (serviceReqObj) =>({
                url:'requestService',
                method:"POST",
                body : serviceReqObj,
            }),
        }),
        
    }),
});


export const { useRegisterUserMutation } = authApi;
export const { useLoginUserMutation } = loginApi;
export const { useUpdateUserMutation } = updateUserApi;
export const { useGetUserQuery } = getUserDetailsApi;
export const { useRequestServiceMutation } = requestServiceApi;
