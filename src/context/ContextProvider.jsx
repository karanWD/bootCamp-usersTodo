import React, {createContext, useState} from "react"
import useAxios from "../hooks/useAxios";


export const Context = createContext()

const ContextProvider = ({children}) => {
    const [users,setUsers]=useState([])
    const [userId, setUserId] = useState()
    const [tasks,setTasks] = useState([])

    console.log(tasks)
    return (
        <Context.Provider value={{userId, setUserId,users,setUsers,tasks,setTasks}}>
            {children}
        </Context.Provider>
    )
};

export default ContextProvider