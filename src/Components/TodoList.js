import React, { useState } from 'react'
import CreatTask from '../Modals/CreatTask'

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal); 

    const[taskList, setTask] = useState([]);

    const saveTask = (taskObj) =>{
        let tempList = taskList;
        tempList.push(taskObj);
        setTask(tempList);
        setModal(false);
    }

  return (
    <>
    <div className='header text-center'>
      <h3>My Todo</h3>
      <button className='btn btn-primary' onClick={()=>setModal(true)}>Create New Todo</button>
    </div>
    <div className="task-container">
      {taskList.map((obj) => <li>{obj.Name} - {obj.Description}</li>)}
    </div>

    <CreatTask toggle={toggle} modal={modal} save = {saveTask}/>
    </>
  )
}

export default TodoList

