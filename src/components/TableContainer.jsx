import React, {useContext, useEffect,useState} from "react"
import useAxios from "../hooks/useAxios";
import {Table, Tag, Button} from "antd";
import {
    CheckCircleOutlined,
    SyncOutlined,
} from '@ant-design/icons';
import {Context} from "../context/ContextProvider";
import axios from "axios";

const {Column} = Table;


const TableContainer = () => {
    const {userId, setTasks, tasks,renderReason,setRenderReason} = useContext(Context)
    const [deletedId, setDeletedId] = useState()
    
    const option = userId ? `?userId=${userId}` : ``

    useAxios(`todos`, option, [userId,renderReason], setTasks)

    const deleteHandler = (id) => {
        console.log(id)
        axios.delete(`http://localhost:4000/todos/${id}`).then(
            res => setRenderReason(`delete ${id}`)
        )
    }

    return (
        <div style={{width: "100%"}}>
            {
                !tasks ?
                    <h1>Loading</h1>
                    :
                    <Table dataSource={tasks}>
                        <Column title="UserId" dataIndex="userId" key="userId"/>
                        <Column title="tasks" dataIndex="title" key="title"/>
                        <Column
                            title="status"
                            dataIndex="completed"
                            key="completed"
                            render={
                                completed => completed ?
                                    <Tag icon={<CheckCircleOutlined/>} color="#87d068">Completed</Tag> :
                                    <Tag icon={<SyncOutlined/>} color="warning">In Progress</Tag>
                            }
                        />
                        <Column title={"process"} dataIndex={"id"} key={"process"}
                                render={id => <Button type={"primary"} danger
                                                      onClick={() => deleteHandler(id)}>Delete</Button>}/>
                    </Table>
            }
        </div>
    )
}

export default TableContainer
