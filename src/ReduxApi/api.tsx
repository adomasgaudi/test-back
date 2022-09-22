import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://192.168.50.202:8000/api",
});

const symbioteApi = createApi({
  reducerPath: "symbioteApi",
  baseQuery,
  endpoints: (build: any) => ({
    getUsers: build.query({
      query: () => "/users",
    }),
    // write post request
    login: build.mutation({
      query: (body: any) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useGetUsersQuery } = symbioteApi;
export default symbioteApi;
