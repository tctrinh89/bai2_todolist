import {useState} from 'react'


function ToDoList(){
    const [todos,setTodo]=useState([])
    const [list,setList]=useState('')
    console.log(list)
    const handleClick =()=>{
        if(list !== '')
        setTodo([...todos,list])
        setList('')
    }
    return (
    <div>
        <h2>Todo List</h2>
        <input 
        value={list}
        onChange={e=>setList(e.target.value)}
        />
        <button 
        onClick={handleClick}
        >ADD</button>
        <ul>
            {todos.map((todo,index) => (
                <li key={index}>{todo}</li>
            ))
        }
        </ul>
    </div>
    )
}





export default ToDoList;