import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	fetchPostsRequest,
	selectLoadingStatus,
	selectPosts,
} from '../redux/slices/postsSlice'
import Post from './Post'
import { Row } from 'react-bootstrap'
import Loading from './Loading'

const Posts = ({ userId }) => {
	const dispatch = useDispatch()
	const posts = useSelector(selectPosts)
	const isLoading = useSelector(selectLoadingStatus)

	const getPosts = () => {
		dispatch(fetchPostsRequest({ userId }))
	}

	useEffect(() => {
		getPosts()
	}, [userId, dispatch])

	return (
		<Row>
			{isLoading ? (
				<Loading />
			) : (
				posts?.map(post => <Post key={post.id} {...post} />)
			)}
		</Row>
	)
}

export default Posts
