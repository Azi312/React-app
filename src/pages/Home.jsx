import React from 'react'
import { Posts } from '../components'
import axios from '../axios'
import Loading from '../components/Loading'

const Home = () => {
	const [posts, setPosts] = React.useState(null)
	const [isLoading, setIsLoading] = React.useState(false)

	const getPosts = async () => {
		try {
			const response = await axios.get('/posts')
			setPosts(response.data)
		} catch (error) {
			console.error(error)
		}
	}

	React.useEffect(() => {
		setIsLoading(true)
		setTimeout(() => {
			getPosts()
			setIsLoading(false)
		}, 500)
	}, [])

	return <>{isLoading ? <Loading /> : <Posts posts={posts} />}</>
}

export default Home
