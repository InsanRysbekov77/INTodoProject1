import React , {useContext}from "react"
import AuthContext from "../store/auth-context"
import './TodoList.css'

const TodoList = () => {
    const cntxData = useContext(AuthContext)
    const deleteHandler = (event) => {
        cntxData.setData(cntxData.data.filter((el) => el.id !== event.target.id))
    }
    const checkHandler = (event) => {
    
        cntxData.setData(cntxData.data.map(el => {
            if(el.id === event.target.id){
                el.completed = !el.completed
            }
            return el;
        }))
    }
    return (
        <>
        <ul>
            {cntxData.data.map((el) => {
                return (
                <li key={el.id}>
                    <span className={el.completed ? 'done' : ''}>{el.value}</span>
                    {el.data}
                    <label>
                    <input type="checkbox" id={el.id} onChange={checkHandler} checked={el.completed} />
                    <span className="btn"></span>
                    <i className="fa fa-power-off"></i>
                    </label>
                    <div>
                    <button className="button-delete task-button" >
                       <i id={el.id} onClick={deleteHandler} className="fa fa-trash"></i>
                   </button>
                    </div>
                </li>
                )
            })}
        </ul>
      </>
    )
}
export default TodoList;