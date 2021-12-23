import React, {useState, useEffect} from "react"
import axios from "axios";


const useAxios = (endpoint,option, dependency,setData) => {
    useEffect(() => {
        axios.get(`http://localhost:4000/${endpoint}${option}`)
            .then(
                (res) => {
                    setData(res.data)
                }
            ).catch(e => console.log(e))
    }, dependency)

}

export default useAxios
