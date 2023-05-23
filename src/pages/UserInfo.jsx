import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Col } from 'react-bootstrap'
import { fetchUserRequest } from '../redux/slices/userSlice'
import { fetchPostsRequest } from '../redux/slices/postsSlice'
import { Posts } from '../components'

const UserInfo = () => {
	const dispatch = useDispatch()
	const user = useSelector(state => state.user.user)
	const userId = useSelector(state => state.user.userId)

	useEffect(() => {
		if (userId) {
			dispatch(fetchUserRequest(userId))
			dispatch(fetchPostsRequest({ userId }))
		}
	}, [userId, dispatch])

	if (!user) {
		return null
	}

	return (
		<Col className='mb-4'>
			<Card className='mb-4'>
				<Card.Header>Подробности о пользователе</Card.Header>
				<Card.Body>
					<Card.Img
						src='https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg'
						alt='avatar'
						className='rounded-circle h-35 w-25'
					/>
					<Card.Title>{user?.name}</Card.Title>
					<Card.Text>Email: {user?.email}</Card.Text>
					<Card.Text>Телефон: {user?.phone}</Card.Text>
					<Card.Text>Вебсайт: {user?.website}</Card.Text>
				</Card.Body>
			</Card>
			<Posts userId={user.id} />
		</Col>
	)
}

export default UserInfo
