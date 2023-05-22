import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import axios from '../axios'
import { setUserId } from '../redux/slices/userSlice'

const Post = ({ id, title, body, userId }) => {
	const [user, setUser] = React.useState(null)
	const [comments, setComments] = React.useState(null)
	const [showComments, setShowComments] = React.useState(false)

	const dispatch = useDispatch()

	const navigate = useNavigate()

	const getUser = async () => {
		try {
			const response = await axios.get(`/users/${userId}`)
			setUser(response.data)
		} catch (error) {
			console.error(error)
		}
	}

	const getComments = async () => {
		try {
			const response = await axios.get(`/posts/${id}/comments`)
			setComments(response.data)
		} catch (error) {
			console.error(error)
		}
	}

	const clickUserHandler = () => {
		dispatch(setUserId(userId))
		navigate(`/profile/${userId}`)
	}

	React.useEffect(() => {
		getUser()
		getComments()
	}, [userId, id])

	return (
		<Col xs={12} sm={6} md={4} className='mb-4'>
			<Card>
				<Card.Header>
					<img
						src='https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg'
						alt='Аватар'
						height='39'
						className='rounded-circle me-2'
						style={{ cursor: 'pointer' }}
						onClick={clickUserHandler}
					/>
					{user && user.name}
				</Card.Header>
				<Card.Body style={{ minHeight: '150px' }}>
					<Card.Title>{title}</Card.Title>
					<Card.Text>{body}</Card.Text>
				</Card.Body>

				<Card.Footer>
					<ListGroup>
						<ListGroupItem
							className='d-flex justify-content-between align-items-center cursor-pointer'
							style={{ cursor: 'pointer' }}
							onClick={() => setShowComments(!showComments)}
						>
							Комментарии
							<span className='badge bg-primary rounded-pill'>
								{comments?.length}
							</span>
						</ListGroupItem>
						{showComments &&
							comments.map(comment => (
								<ListGroupItem key={comment.id}>
									<h6>{comment.email}</h6>
									<p>{comment.body}</p>
								</ListGroupItem>
							))}
					</ListGroup>
				</Card.Footer>
			</Card>
		</Col>
	)
}

export default Post
