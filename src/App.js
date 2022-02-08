import { useContext, useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import AuthContext from './store/auth-context'
function App() {
//   const localData = JSON.parse(localStorage.getItem('todos'))
// 	const [data, setData] = useState(localData ? localData : [])

// 	const newDataHandler = (newData) => {
// 		setData([...data, newData])
// 	}

// 	useEffect(() => {
// 		localStorage.setItem('todos', JSON.stringify(data))
// 	}, [data])
	const ctxData = useContext(AuthContext)
	return (
		<div className='container'>
			<div className='app-wrapper'>
				<TodoForm  />
				<TodoList  />
			</div>
			<></>
		</div>
	)
}

export default App
