import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const homesApi = createApi({
  reducerPath: "homesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/home/" }),
  tagTypes: ["Home"],
  endpoints: (builder) => ({
    getHomes: builder.query({
      query: (userId) => `find-by-user?userId=${userId}`,
      providesTags: (result, error, userId) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Home", id })),
              { type: "Home", id: "LIST" },
            ]
          : [{ type: "Home", id: "LIST" }],
    }),
    updateHomeUsers: builder.mutation({
      query: ({ homeId, userIds }) => ({
        url: "update-users",
        method: "PUT",
        body: { homeId, userIds },
      }),
      invalidatesTags: (result, error, { homeId }) => [
        { type: "Home", id: homeId },
        { type: "Home", id: "LIST" },
      ],
    }),
  }),
});

export const { useGetHomesQuery, useUpdateHomeUsersMutation } = homesApi;
