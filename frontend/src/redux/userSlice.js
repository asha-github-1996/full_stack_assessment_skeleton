import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/user/" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "find-all",
    }),
    getUsersByHome: builder.query({
      query: (homeId) => `find-by-home?homeId=${homeId}`,
    }),
  }),
});

export const { useGetUsersQuery, useGetUsersByHomeQuery } = userApi;
