import React from 'react'
import classes from './ErrorModal.module.css'

const ErrorModal = (props) => {
    console.log(props);
	return (
		<div className={classes.modal}>
			<header className={classes.header}>
				<h1 className={classes.title}>{props.title}</h1>
				<button className={classes.btn} onClick={props.onConfirm}>
					OK
				</button>
			</header>
		</div>
	)
}

export default ErrorModal
