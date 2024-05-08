
import React, { useState } from 'react';
import Input from './Components/Input';
import Card from './Components/Card';




const App = () => {
const[todo,setTodo] =useState([]) //[{},{},{}]
const addTodo =(newTitle,newDesc)=>{
  let data = {
    id:todo.length+1,
    title: newTitle,
    description:newDesc,
    completed:"false"
  }
  setTodo([...todo,data])
  console.log("added");
}
console.log(todo);
const deleteTodo=(id)=>{
  setTodo(todo.filter((ele)=>ele.id !== id))
}

  return (
    <div> 
      
       <h1>My Todo</h1>
       <Input addTodo={addTodo}/>
         {todo.map((element,index)=>{
           return(
            
              <Card element={element} index={index} deleteTodo={deleteTodo} />
           )
       })}
      
    </div>
  );
};

export default App;
