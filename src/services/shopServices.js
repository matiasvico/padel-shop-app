import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://padel-shop-58338-default-rtdb.firebaseio.com/' }),
  endpoints: (builder) => ({
    getProductos: builder.query({
      query: () => `productos.json`,
    }),
  }),
})


export const { useGetProductosQuery } = shopApi