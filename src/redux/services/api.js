import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.nytimes.com/svc/search/v2',
  }),
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: (searchTerm) =>
        `/articlesearch.json?q=${searchTerm}&api-key=4IPE1nG4IAT83HbZIEsgii6n43utVo7g`,
    }),
  }),
});

export const { useGetArticlesQuery } = api;
