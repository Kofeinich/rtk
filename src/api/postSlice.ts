import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {PostCard} from "../types/posts";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (builder) => ({
        getPosts: builder.query<PostCard [], [number, number]>({
            query: ([limit, page = 1]) => `posts?_limit=${limit}&_page=${page}`,
        }),
        getPostById: builder.query({
            query: (id: number) => `posts/${id}`,
        })
    }),
});

export const { useGetPostsQuery, useGetPostByIdQuery } = api;
