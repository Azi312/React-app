import { createSlice } from '@reduxjs/toolkit'

const postsSlice = createSlice({
	name: 'posts',
	initialState: {
		posts: [],
		isLoading: false,
		error: null,
	},
	reducers: {
		fetchPostsRequest: state => {
			state.isLoading = true
			state.error = null
		},
		fetchPostsSuccess: (state, action) => {
			state.posts = action.payload
			state.isLoading = false
			state.error = null
		},
		fetchPostsFailure: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export const { fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure } =
	postsSlice.actions

export const selectPosts = state => state.posts.posts
export const selectLoadingStatus = state => state.posts.isLoading

export default postsSlice.reducer
