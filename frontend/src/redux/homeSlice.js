import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const homesApi = createApi({
  reducerPath: "homesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/home/" }),
  tagTypes: ["Home"],
  endpoints: (builder) => ({
    getHomes: builder.query({
      query: (userId) => `find-by-user?userId=${userId}`,
      providesTags: (result, error, userId) => [{ type: "Home", id: userId }],
    }),
    updateHomeUsers: builder.mutation({
      query: ({ homeId, userIds }) => ({
        url: "update-users",
        method: "PUT",
        body: { homeId, userIds },
      }),
      invalidatesTags: (result, error, { homeId }) => [
        { type: "Home", id: homeId },
      ],
    }),
  }),
});

export const { useGetHomesQuery, useUpdateHomeUsersMutation } = homesApi;
