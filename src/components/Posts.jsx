import React, { useState, useEffect, useRef } from 'react'
import Post from './Post'
import { Row } from 'react-bootstrap'
import axios from '../axios'
import Loading from './Loading'
import { useObserver } from '../hooks/useObserver'
import { getPageCount } from '../utils/pages'

const Posts = ({ userId }) => {
	const [posts, setPosts] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [totalPages, setTotalPages] = useState(0)
	const [limit, setLimit] = useState(10)
	const [page, setPage] = useState(1)
	const lastElement = useRef()

	const getPosts = async () => {
		const user = userId ? `&userId=${userId}` : ''
		try {
			setIsLoading(true)
			const response = await axios.get(
				`/posts?_limit=${limit}&_page=${page}${user}`
			)
			setPosts([...posts, ...response.data])
			const totalCount = response.headers['x-total-count']
			setTotalPages(getPageCount(totalCount, limit))
		} catch (error) {
			console.error(error)
		} finally {
			setTimeout(() => {
				setIsLoading(false)
			}, 500)
		}
	}

	useObserver(lastElement, page < totalPages, isLoading, () => {
		setPage(page + 1)
	})

	useEffect(() => {
		getPosts()
	}, [page, limit])

	return (
		<Row>
			{isLoading && <Loading />}
			{posts?.map(post => (
				<Post key={post.id} {...post} />
			))}
			<div ref={lastElement} style={{ height: 10 }}></div>
		</Row>
	)
}

export default Posts
