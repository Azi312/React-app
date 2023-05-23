import React from 'react'
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
	return (
		<>
			<Navbar bg='light' expand={false} className='mb-3'>
				<Container>
					<Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />

					<Navbar.Offcanvas
						id={`offcanvasNavbar-expand-${false}`}
						aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
						placement='start'
					>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
								Menu
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className='justify-content-end flex-grow-1 pe-3'>
								<Nav.Link>
									<Link to='/'>Home</Link>
								</Nav.Link>
								<Nav.Link>
									<Link to='/about'>About</Link>
								</Nav.Link>
							</Nav>
							<Navbar.Text style={{ display: 'flex' }}>
								<img
									src='https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg'
									alt='Аватар'
									height='39'
									className='rounded-circle me-2'
								/>
								<div className={styles.avatar}>
									<span>Aziz</span>
									<span>azizbek.mamytov01@gmail.com</span>
								</div>
							</Navbar.Text>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	)
}

export default Header
