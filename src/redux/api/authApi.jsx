import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3000` }),
  tagTypes: ["authApi"],
  endpoints: (builder) => ({
    getInfo: builder.query({
      query: () => "/carts",
      providesTags: ["authApi"]
    }),
    detailInfo: builder.query({
      query: (id) => `/carts/${id}`,
      providesTags: ["authApi"]
    }),
  }),
});

export const { useGetInfoQuery,useDetailInfoQuery } = authApi;
