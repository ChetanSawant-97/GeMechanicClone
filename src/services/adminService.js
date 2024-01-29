import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const authToken = sessionStorage.getItem('accessToken');

export const getAllServices = createApi({
    reducerPath: 'getAllServices',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://localhost:8080/api/v1/adminService/',
        headers: {
            Authorization: ('Bearer ' + authToken), 
        },
    }),
    endpoints: (builder) => ({
        getAllServices: builder.query({
        query: ({ fromDate, toDate, status, customerName }) => `getServices?fromDate=${fromDate}&toDate=${toDate}&status=${status}&customerName=${customerName}`,
        }),
    }),
});


export const { useGetAllServicesQuery } = getAllServices;
