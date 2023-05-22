import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	userId: null,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserId: (state, action) => {
			state.userId = action.payload
		},
	},
})

export const { setUserId } = userSlice.actions

export const selectUser = state => state.user.user
