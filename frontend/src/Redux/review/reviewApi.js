import { apiSlice } from "../api/apiSlice";

export const reviewApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllReview: builder.query({
      query: (query) => ({
        url: "/review/all",
        method: "GET",
        params: query,
      }),
      providesTags: ["review"],
    }),

    getSingleReview: builder.query({
      query: (id) => ({
        url: `/review/${id}`,
        method: "GET",
      }),
    }),

    addReview: builder.mutation({
      query: (data) => ({
        url: "/review/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["review"],
    }),

    updateReview: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/review/update/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["review"],
    }),

    deleteReview: builder.mutation({
      query: (id) => ({
        url: `/review/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["review"],
    }),
  }),
});

export const {
  useGetAllReviewQuery,
  useGetSingleReviewQuery,
  useAddReviewMutation,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
} = reviewApi;
