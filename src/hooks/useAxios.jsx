import React, {useState, useEffect} from "react"
import axios from "axios";


const useAxios = (endpoint,dependency) => {
    console.log(endpoint,dependency)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetch = async () => {
            try {
                setLoading(true)
                await axios.get(`https://jsonplaceholder.typicode.com/${endpoint}`)
                    .then(
                        (res) => {
                            setData(res.data)
                        }
                    )
            } catch (e) {
                await setError(e)
            } finally {
                await setLoading(false)
            }
        }

        fetch()

    }, [dependency])


    return {data, error, loading}
}

export default useAxios
