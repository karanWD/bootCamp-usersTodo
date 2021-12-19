import React,{useContext,useEffect} from "react"
import {Select} from 'antd';
import useAxios from "../hooks/useAxios";
import {Context} from "../context/ContextProvider";

const {Option} = Select;

const Filter = () => {
    console.log("filter")
    const {setUserId,setUsers,users} = useContext(Context)
    const {data,loading,error} = useAxios("users")


    useEffect(()=>{
        setUsers(data)
    },[data])


    const changeHandler = (value)=>{
        setUserId(value)
    }


    return (
        <Select
            size={"large"}
            showSearch
            style={{width:"70%"}}
            placeholder="filter by users"
            optionFilterProp="children"
            filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
            }
            onChange={changeHandler}
            allowClear
        >
            {
                loading  ?
                    <Option>Loading</Option>
                    :
                    users.map((user,i) =>
                        <Option key={i} value={user.id}>{user.name}</Option>
                    )
            }

        </Select>
    )
}

export default Filter