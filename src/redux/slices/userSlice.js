import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	user: null,
	userId: null,
	isLoading: false,
	error: null,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		fetchUserRequest: (state, action) => {
			state.isLoading = true
			state.error = null
			state.userId = action.payload
		},
		fetchUserSuccess: (state, action) => {
			state.isLoading = false
			state.user = action.payload
		},
		fetchUserFailure: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export const { fetchUserRequest, fetchUserSuccess, fetchUserFailure } =
	userSlice.actions

export default userSlice.reducer
