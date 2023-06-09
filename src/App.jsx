import { Container } from 'react-bootstrap'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Header, Posts, Post } from './components'
import Home from './pages/Home'
import About from './pages/About'
import UserInfo from './pages/UserInfo'

function App() {
	return (
		<div className='App'>
			<Header />
			<Container>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/profile' element={<UserInfo />} />
				</Routes>
			</Container>
		</div>
	)
}

export default App
