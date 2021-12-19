import React,{useContext} from "react"
import useAxios from "../hooks/useAxios";
import {Table,Tag} from "antd";
import {
    CheckCircleOutlined,
    SyncOutlined,
} from '@ant-design/icons';
import {Context} from "../context/ContextProvider";

const { Column } = Table;


const TableContainer = () => {
    const {data,loading} = useContext(Context)


    return (
        <div style={{width:"100%"}}>
           {
               loading && !data ?
                   <h1>Loading</h1>
                   :
                   <Table dataSource={data} >
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