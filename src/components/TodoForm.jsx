import React, { useContext, useReducer, useState } from 'react'
import './TodoForm.css'
import ErrorModal from './UI/ErrorModal'
import BackDrop from './UI/BackDrop'
import AuthContext from '../store/auth-context'
const Todoreducer = (state, action) => {
	if (action.type === 'USER_INPUT') {
		return {
			value: action.val,
			data: new Date().toLocaleDateString(),
		}
	}
	return {
		value: '',
		isValid: false,
	}
}
const TodoForm = () => {
	const cntxData = useContext(AuthContext)

	const [error, setError] = useState(false)

	const [todostate, dispatchTodo] = useReducer(Todoreducer, {
		value: '',
		data: '',
		isValid: false,
	})

	const TodoHandler = (event) => {
	
		dispatchTodo({ type: 'USER_INPUT', val: event.target.value })
	}

	const submitHandler = (event) => {
		event.preventDefault()
		const newData = {
			value: todostate.value,
			data: todostate.data,
			id: Math.random().toString(),
			completed: false,
		}
		if (todostate.value.trim().length === 0) {
			setError({
				title: 'Напишите что нибудь',
			})
		}
		cntxData.newDataHandler(newData)
	}
	const ErrorHandler = () => {
		setError(null)
	}

	return (
		<>
			{error && (
				<BackDrop>
					<ErrorModal title={error.title} onConfirm={ErrorHandler} />
				</BackDrop>
			)}
			<div>
				<form className='todo-form' onSubmit={submitHandler}>
					<h1>To Do list</h1>
					<input
						type='text'
						onChange={TodoHandler}
						placeholder='Enter a Todo...'
						className='task-input'
					/>
					<button className='button-add' type='submit'>
						Add
					</button>
				</form>
			</div>
		</>
	)
}

export default TodoForm
