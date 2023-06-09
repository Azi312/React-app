import React from 'react'
import { Col } from 'react-bootstrap'

const About = () => {
	return (
		<Col xs={12} sm={6} md={5} style={{ margin: '0 auto' }}>
			<h2>Обо мне</h2>
			<p>
				Я – фронтенд разработчик, который обожает творить магию с React! Мой
				профиль – это создание веб-приложений, используя современную библиотеку
				React и ее широкую экосистему, такую как Next.js, Redux и многое другое.
				<br />
				Я также обладаю опытом создания полноценных приложений с использованием
				полного стека MERN, включающего в себя MongoDB, Express, React и
				Node.js.
				<br /> Я всегда стремлюсь к совершенству и использую передовые
				технологии, чтобы улучшить пользовательский опыт и сделать свои
				приложения максимально быстрыми и отзывчивыми. Мой подход к работе – это
				аккуратный и детальный подход, с максимальной ориентацией на цели
				проекта.
				<br /> Вы можете найти подробную информацию обо мне и моем опыте в моем
				резюме, которое доступно по следующей ссылке:
			</p>
			<a href='https://docs.google.com/document/d/1Eq1TSAfXieoBkjjY-GJ5KZwEgJg7Ty8AHQdkBFVphY8/edit?usp=sharing'>
				Ссылка на резюме
			</a>
		</Col>
	)
}

export default About
