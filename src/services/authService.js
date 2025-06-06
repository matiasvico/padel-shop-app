import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://identitytoolkit.googleapis.com/v1/" }),
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (auth) => ({
                url: "accounts:signUp?key=AIzaSyCpyC0lz3GfXUpoILKM4qgeitxfEd4qjeo",
                method: "POST",
                body: {
                    ...auth,
                    returnSecureToke: true
                }
            }),
        }),
        login: builder.mutation({
            query: (auth) => ({
                url: "accounts:signInWithPassword?key=AIzaSyCpyC0lz3GfXUpoILKM4qgeitxfEd4qjeo",
                method: "POST",
                body: {
                    ...auth,
                    returnSecureToke: true
                }
            }),
        }),
    }),
});

export const { useSignupMutation, useLoginMutation } = authApi