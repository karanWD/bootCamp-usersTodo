import React,{useContext,useEffect} from "react"
import useAxios from "../hooks/useAxios";
import {Table,Tag} from "antd";
import {
    CheckCircleOutlined,
    SyncOutlined,
} from '@ant-design/icons';
import {Context} from "../context/ContextProvider";

const { Column } = Table;


const TableContainer = () => {
    console.log("table")

    const {userId,setTasks,tasks} = useContext(Context)
    const {data, loading, error} = useAxios(`todos${userId ? `?userId=${userId}` : ``}`, userId)

    useEffect(()=>{
        setTasks(data)
    },[data])

    return (
        <div style={{width:"100%"}}>
           {
               loading && !data ?
                   <h1>Loading</h1>
                   :
                   <Table dataSource={tasks} >
                       <Column title="UserId" dataIndex="userId" key="userId" />
                       <Column title="tasks" dataIndex="title" key="title" />
                       <Column
                           title="status"
                           dataIndex="completed"
                           key="completed"
                           render={
                                   completed => completed ? <Tag  icon={<CheckCircleOutlined />} color="#87d068">Completed</Tag> : <Tag icon={<SyncOutlined/>} color="warning">In Progress</Tag>
                           }
                       />
                   </Table>
           }
        </div>
    )
}

export default TableContainer