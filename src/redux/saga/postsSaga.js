import { call, put, takeLatest } from 'redux-saga/effects'
import {
	fetchPostsRequest,
	fetchPostsSuccess,
	fetchPostsFailure,
} from '../slices/postsSlice.js'
import axios from '../../axios'

function* fetchPosts(action) {
	try {
		const { userId } = action.payload
		const user = userId ? `?userId=${userId}` : ''
		const response = yield call(axios.get, `/posts${user}`)
		yield put(fetchPostsSuccess(response.data))
	} catch (error) {
		yield put(fetchPostsFailure(error))
	}
}

export function* watchFetchPosts() {
	yield takeLatest(fetchPostsRequest.type, fetchPosts)
}
