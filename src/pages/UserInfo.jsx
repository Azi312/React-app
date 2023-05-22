import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Col, ListGroup, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { Posts } from '../components'
import axios from '../axios'

const UserInfo = () => {
	const [user, setUser] = React.useState(null)
	const userId = useSelector(state => state.user.userId)

	console.log(userId)

	const getUser = async () => {
		try {
			const response = await axios.get(`/users/${userId}`)
			setUser(response.data)
		} catch (error) {
			console.error(error)
		}
	}

	React.useEffect(() => {
		if (userId) {
			getUser()
		}
	}, [userId])

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
			<Posts userId={user?.id} />
		</Col>
	)
}

export default UserInfo
