import { apiSlice } from "../api/apiSlice";

export const approachApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllApproach: builder.query({
      query: () => ({
        url: "/approach/all",
        method: "GET",
      }),
      providesTags: ["approach"],
    }),

    getSingleApproach: builder.query({
      query: (id) => ({
        url: `/approach/${id}`,
        method: "GET",
      }),
    }),

    addApproach: builder.mutation({
      query: (data) => ({
        url: "/approach/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["approach"],
    }),

    updateApproach: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/approach/update/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["approach"],
    }),

    deleteApproach: builder.mutation({
      query: (id) => ({
        url: `/approach/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["approach"],
    }),
  }),
});

export const {
  useGetAllApproachQuery,
  useGetSingleApproachQuery,
  useAddApproachMutation,
  useUpdateApproachMutation,
  useDeleteApproachMutation,
} = approachApi;
