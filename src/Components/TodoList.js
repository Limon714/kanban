import React, { useEffect, useState } from 'react'
import Card  from './Card';
import CreatTask from '../Modals/CreatTask'

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal); 

    const[taskList, setTask] = useState([]);

    useEffect(()=>{
      let arr = localStorage.getItem('taskList');

      if(arr){
        let obj = JSON.parse(arr)
        setTask(obj)
      }
    }, [])

    const saveTask = (taskObj) =>{
        let tempList = taskList;
        tempList.push(taskObj);
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTask(tempList);
        setModal(false);
    }

    const deleteTask = (index) => {
      let tempList = taskList
      tempList.splice(index, 1)
      localStorage.setItem("taskList", JSON.stringify(tempList))
      setTask(tempList)
      window.location.reload()
  }
  const updateListArray = (obj, index) =>{
    let tempList = taskList 
    tempList[index] = obj
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTask(tempList)
    window.location.reload()
  }
  return (
    <>
    <div className='header text-center'>
      <h3>My Todo</h3>
      <button className='btn btn-primary' onClick={()=>setModal(true)}>Create New Todo</button>
    </div>
    <div className="task-container">
      {taskList.map((obj, index) => <Card taskObj={obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray} /> )}
    </div>

    <CreatTask toggle={toggle} modal={modal} save = {saveTask}/>
    </>
  )
}

export default TodoList

