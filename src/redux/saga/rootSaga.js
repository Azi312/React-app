import { all } from 'redux-saga/effects'
import { watchFetchPosts } from './postsSaga'
import { watchFetchUser } from './userSaga'

export default function* rootSaga() {
	yield all([watchFetchPosts(), watchFetchUser()])
}
