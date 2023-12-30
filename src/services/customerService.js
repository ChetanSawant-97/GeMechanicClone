import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const registerUserApi = createApi({
    reducerPath : 'registerUserApi',
    baseQuery : fetchBaseQuery({baseUrl: 'http://localhost:8080/api/v1/auth/'}),
    endpoints : (builder) =>({
        authenticateUser : builder.query({
            query : (userName) => '/authenticate/${userName}',
        }),
        registerUser : builder.mutation({
            query : (customerObj) =>({
                url:'register',
                method:"POST",
                body : customerObj,
            }),
        }),
    }),
});

export const { useAuthenticateUserQuery, useRegisterUserMutation } = registerUserApi;
