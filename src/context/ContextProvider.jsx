import React, {createContext, useEffect, useState} from "react"
import useAxios from "../hooks/useAxios";


export const Context = createContext()

const ContextProvider = ({children}) => {
    console.log("context")
    const [users, setUsers] = useState([])
    const [userId, setUserId] = useState()
    const [tasks, setTasks] = useState([])
    console.log("context afterState")

    console.log(tasks)

    return (
        <Context.Provider value={{userId, setUserId, users, setUsers, tasks, setTasks}}>
            {children}
        </Context.Provider>
    )
};

export default ContextProvider