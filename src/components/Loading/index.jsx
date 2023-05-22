import React from 'react'
import styles from './Loading.module.css'

const index = () => {
	return (
		<div className={styles.loader_container}>
			<div className={styles.loader}>
				<div className={styles.loader_dot}></div>
				<div className={styles.loader_dot}></div>
				<div className={styles.loader_dot}></div>
				<div className={styles.loader_dot}></div>
				<div className={styles.loader_dot}></div>
				<div className={styles.loader_dot}></div>
				<div className={styles.loader_text}></div>
			</div>
		</div>
	)
}

export default index
