import React, {createContext, useState} from "react"
import useAxios from "../hooks/useAxios";


export const Context = createContext()

const ContextProvider = ({children}) => {

    const [userId, setUserId] = useState()
    console.log("aaa")

    const {data, loading, error} = useAxios(`todos${userId ? `?userId=${userId}` : ``}`, userId)

    console.log("bbbb",loading)

    return (
        <Context.Provider value={{userId, setUserId, data, loading}}>
            {children}
        </Context.Provider>
    )
};

export default ContextProvider