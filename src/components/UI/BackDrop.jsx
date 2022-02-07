import React from 'react'
import classes from './BackDrop.module.css'

const BackDrop = (props) => {
	return (
		<div onClick={props.onConfirm} className={classes.backdrop}>
			{props.children}
		</div>
	)
}
export default BackDrop
