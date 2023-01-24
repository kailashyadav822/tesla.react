import React, { useState } from 'react'
import './Todo.css'
// import CheckIcon from '@mui/icons-material/Check';
// import DeleteIcon from '@mui/icons-material/Delete';
// import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

function Todo() {
    let [inputValue, setInputValue] = useState('')
    let [tasks, setTasks] = useState([])
    let [applyCss, setApplyCss] = useState([])
    let [edit, setEdit] = useState(false)



    function handleChange(e) {
        setInputValue(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(inputValue)

        if (inputValue === '') {
            return alert(`please enter task first`)
        }
        //new entry
        else if(edit===false){
            setTasks([...tasks, inputValue])
          }
          
          //existing entry
          else{

            tasks[edit]=inputValue
            setEdit(false)
          }
          
          setInputValue('')
          

        console.log(tasks)


    }

    function deleteTask(e, id) {
        e.preventDefault()
        setTasks(tasks.filter((todo, index) => {
            // console.log(tasks.length)

            return index !== id
        }))
    }

    function checktask(e, task) {
        e.preventDefault()
        setApplyCss([...applyCss,task])
        // setApplyCss([])
        console.log(applyCss)


        // setApplyCss(tasks[todoId])
        // console.log(applyCss)
        // setComplete(todoId)
        // console.log(complete)

    }

function editTask(e,id){
  e.preventDefault()
setInputValue(tasks[id])
setEdit(id)


}

    function List() {
        return (
            <ul className='todoList'>
                {
                    tasks.map((task, index) => {
                        return (
                            <li key={index} className={(applyCss.includes(task)) ? 'completed' : ''}>{task}
                                <a href="" onClick={(e) => checktask(e, task)}>✔
                                  {/* <CheckIcon /> */}
                                  </a>
                                <a href=""  onClick={(e)=>editTask(e,index)}>✂
                                  {/* <ModeEditOutlineIcon /> */}
                                  </a>
                                <a href="" onClick={(e) => deleteTask(e, index)}>🗑
                                  {/* <DeleteIcon /> */}
                                  </a>
                            </li>
                        )
                    })
                }


            </ul>
        )

    }


    return (
        <div className='container'>
            <h3>TO Do List</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleChange} placeholder='Enter Task...' />
                <button type='submit'>ADD Todo</button>

            </form>
            <List />
        </div>

    )
}

export default Todo