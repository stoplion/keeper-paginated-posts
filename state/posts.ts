import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { POSTS_PER_PAGE } from '../constants';
import { Post } from '../types';

type PostsState = {
  allPosts: Post[];
  pagePosts: Post[];
  offset: number;
  currentPage: number;
};

const initialState: PostsState = {
  allPosts: [],
  pagePosts: [],
  offset: 0,
  currentPage: 1,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    paginatePosts: (state: PostsState, action: PayloadAction<number>) => {
      state.currentPage += action.payload;
      state.offset = (state.currentPage - 1) * POSTS_PER_PAGE;

      const pagePosts = state.allPosts.slice(
        state.offset,
        state.offset + POSTS_PER_PAGE
      );

      state.pagePosts = pagePosts;
    },
    initPagePosts: (state: PostsState) => {
      const pagePosts = state.allPosts.slice(0, POSTS_PER_PAGE);
      state.pagePosts = pagePosts;
    },
    initPosts: (state: PostsState, action: PayloadAction<Post[]>) => {
      state.allPosts = action.payload;
    },
  },
});

export const { paginatePosts, initPagePosts, initPosts } = postsSlice.actions;

export default postsSlice.reducer;
