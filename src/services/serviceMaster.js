import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const authToken = sessionStorage.getItem('accessToken');


export const serviceDetApi = createApi({
    reducerPath: 'serviceDetApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://localhost:8080/api/v1/service/',
        headers: {
            Authorization: ('Bearer ' + authToken), 
        },
    }),
    endpoints: (builder) => ({
        getServiceDet: builder.query({
            query: () => `serviceMaster`,
        }),
    }),
});

export const addOrUpdateService = createApi({
    reducerPath : 'addOrUpdateService',
    baseQuery : fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api/v1/service/',
        headers: {
            Authorization: ('Bearer ' + authToken), 
        },
    }),
    endpoints : (builder) =>({
        addOrUpdateService : builder.mutation({
            query : (serviceObj) =>({
                url:'createService',
                method:"POST",
                body : serviceObj,
            }),
        }),
        
    }),
});

export const deleteServiceApi = createApi({
    reducerPath : 'deleteServiceApi',
    baseQuery : fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api/v1/service/',
        headers: {
            Authorization: ('Bearer ' + authToken), 
        },
    }),
    endpoints : (builder) =>({
        deleteService : builder.mutation({
            query : (serviceMasterId) =>({
                url:`deleteService?serviceMasterId=${serviceMasterId}`,
                method:"DELETE",
            }),
        }),
    }),
});


export const { useDeleteServiceMutation } = deleteServiceApi;
export const { useGetServiceDetQuery } = serviceDetApi;
export const { useAddOrUpdateServiceMutation } = addOrUpdateService;

