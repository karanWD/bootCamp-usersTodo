import React,{useState,useContext} from "react"
import {Modal, Button, Select,Input} from 'antd';
import {Context} from "../context/ContextProvider";
import axios from "axios";
const {Option} = Select;
const { TextArea } = Input;

const AddBtn = () => {
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const [userId,setUserId]=useState()
    const[task,setTask]=useState()
    const {users,setTasks} = useContext(Context)

    const showModal = () => {
        setVisible(true);
    };
    const handleCancel = () => {
        setVisible(false);
    };
    const handleOk = () => {
        console.log(userId,task)
        axios.post(`https://jsonplaceholder.typicode.com/todos`,{
            userId,
            title:task,
            completed:false
        })
            .then(res => setTasks(prev => [...prev,res.data]))
            .catch(e=>console.log(e))
            .finally(()=>setVisible(false))
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
               Add New +
            </Button>
            <Modal
                title=""
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <h1>Mention A Task To The User</h1>
                <Select
                    size={"large"}
                    showSearch
                    style={{width:"70%"}}
                    placeholder="select your user"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    filterSort={(optionA, optionB) =>
                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                    }
                    onChange={(value)=>setUserId(value)}
                    allowClear
                >
                    {
                        !users  ?
                            <Option>Loading</Option>
                            :
                            users.map((user,i) =>
                                <Option key={i} value={user.id}>{user.name}</Option>
                            )
                    }

                </Select>
                <TextArea showCount maxLength={20} style={{ height: 60,marginTop:"10px" }} onChange={(e)=>setTask(e.target.value)} />
            </Modal>
        </>


    )
}

export default AddBtn