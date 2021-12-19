import React,{useContext} from "react"
import {Select} from 'antd';
import useAxios from "../hooks/useAxios";
import {Context} from "../context/ContextProvider";

const {Option} = Select;

const Filter = () => {
    const {data,loading,error} = useAxios("users")
    const {setUserId} = useContext(Context)
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
                    <h1>Loading</h1>
                    :
                    data.map((user) =>
                        <Option value={user.id}>{user.name}</Option>
                    )
            }

        </Select>
    )
}

export default Filter