import { apiSlice } from "../api/apiSlice";

export const teamCategoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllTeamCategory: builder.query({
      query: () => ({
        url: "/team-category/all",
        method: "GET",
      }),
      providesTags: ["teamCategory"],
    }),

    getSingleTeamCategory: builder.query({
      query: (id) => ({
        url: `/team-category/${id}`,
        method: "GET",
      }),
      providesTags: ["teamCategory"],
    }),

    addTeamCategory: builder.mutation({
      query: (data) => ({
        url: "/team-category/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["teamCategory"],
    }),

    updateTeamCategory: builder.mutation({
      query: ({ id, data }) => ({
        url: `/team-category/update/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["teamCategory"],
    }),

    deleteTeamCategory: builder.mutation({
      query: (id) => ({
        url: `/team-category/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["teamCategory"],
    }),
  }),
});

export const {
  useGetAllTeamCategoryQuery,
  useGetSingleTeamCategoryQuery,
  useAddTeamCategoryMutation,
  useUpdateTeamCategoryMutation,
  useDeleteTeamCategoryMutation,
} = teamCategoryApi;
