import {useState} from 'react'
import ToDoList from './ToDoList'

const list=[
  {id:1,
  name:"a"
  },
  {id:2,
  name:"abc"
  },
  {id:3,
    name:"abdsfjb"
    }
]
function App() {
  const [check,setCheck]=useState([]);

  const handleCheck=(c)=>{
    if(check.includes(c.id)){
     setCheck(check.filter( item => item !== c.id))
    } else {
    setCheck(a =>[...a,c.id]);
  }
  }
  const chon =()=>{
    console.log(check)}
  return (
    <div className="App">
      {list.map( c =>
        <div key={c.id}>
          <input type="checkbox" 
                checked={check.includes(c.id)}
                onChange={()=>handleCheck(c)}
          /> {c.name}
        </div>
        )}
      <h1>{check}</h1>
      <button onClick={chon}>chon</button>
      <ToDoList />
    </div>
  );
}

export default App;
