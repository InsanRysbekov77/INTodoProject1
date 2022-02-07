import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const localData = JSON.parse(localStorage.getItem('todos'))
	const [data, setData] = useState(localData ? localData : [])

	const newDataHandler = (newData) => {
		setData([...data, newData])
	}

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(data))
	}, [data])

	return (
		<div className='container'>
			<div className='app-wrapper'>
				<TodoForm onGetDataHandler={newDataHandler} />
				<TodoList data={data} setData={setData} />
			</div>
			<></>
		</div>
	)
}

export default App
