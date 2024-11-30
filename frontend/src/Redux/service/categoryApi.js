import { apiSlice } from "../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => ({
        url: "/service-category/all",
        method: "GET",
      }),
      providesTags: ["category"],
    }),

    getSingleCategory: builder.query({
      query: (id) => ({
        url: `/service-category/${id}`,
        method: "GET",
      }),
      providesTags: ["category"],
    }),

    addCategory: builder.mutation({
      query: (data) => ({
        url: "/service-category/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["category"],
    }),

    updateCategory: builder.mutation({
      query: ({ id, data }) => ({
        url: `/service-category/update/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["category"],
    }),

    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/service-category/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["category"],
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useGetSingleCategoryQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
