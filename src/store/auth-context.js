import React ,{useState, useEffect}from "react";

const AuthContext = React.createContext({
    isWrote: true
})
 export const AuthContextProvider = (props) => {
    const localData = JSON.parse(localStorage.getItem('todos'))
	const [data, setData] = useState(localData ? localData : [])

	const newDataHandler = (newData) => {
		setData([...data, newData])
	}

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(data))
	}, [data])
    return(
        <AuthContext.Provider value={{newDataHandler:newDataHandler, data:data , setData: setData}}>
            {props.children} 
        </AuthContext.Provider>
    )
}
export default AuthContext;