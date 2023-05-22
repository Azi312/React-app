import React from 'react'
import Post from './Post'
import { Row } from 'react-bootstrap'

const Posts = ({ posts }) => {
	return (
		<Row>{posts && posts.map(post => <Post key={post.id} {...post} />)}</Row>
	)
}

export default Posts
