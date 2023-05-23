import { takeLatest, call, put } from 'redux-saga/effects'
import axios from '../../axios'
import {
	fetchUserRequest,
	fetchUserSuccess,
	fetchUserFailure,
} from './../slices/userSlice.js'

function* fetchUser(action) {
	try {
		const response = yield call(axios.get, `/users/${action.payload}`)
		yield put(fetchUserSuccess(response.data))
	} catch (error) {
		yield put(fetchUserFailure(error.message))
	}
}

export function* watchFetchUser() {
	yield takeLatest(fetchUserRequest.type, fetchUser)
}
