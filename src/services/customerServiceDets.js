import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const authToken = sessionStorage.getItem('accessToken');


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
            query : (serviceRequestDetailsDTO) =>({
                url:'requestService',
                method:"POST",
                body : serviceRequestDetailsDTO,
            }),
        }),
        
    }),
});



export const getRequestedServices = createApi({
    reducerPath: 'getRequestedServices',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://localhost:8080/api/v1/customerServiceDet/',
        headers: {
            Authorization: ('Bearer ' + authToken), 
        },
    }),
    endpoints: (builder) => ({
        getReqServices: builder.query({
        query: () => "getServices",
        }),
    }),
});


export const { useRequestServiceMutation } = requestServiceApi;
export const { useGetReqServicesQuery } = getRequestedServices;
