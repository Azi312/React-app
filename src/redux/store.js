import { configureStore } from '@reduxjs/toolkit'
// import { userSlice } from './slices/userSlice'
import createSagaMiddleware from 'redux-saga'
import postsReducer from './slices/postsSlice'
import rootSaga from './saga/rootSaga'
import userSlice from './slices/userSlice'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
	reducer: {
		user: userSlice,
		posts: postsReducer,
	},
	middleware: [sagaMiddleware],
})
sagaMiddleware.run(rootSaga)
