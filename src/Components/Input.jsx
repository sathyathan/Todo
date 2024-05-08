
import React, { useState } from 'react';

const Input = ({addTodo}) => {
    const[title,setTitle]=useState('');
    const[description,setDescription]=useState('')
    const handleSubmit=()=>{
        addTodo(title,description)
        setTitle('')
        setDescription('')
    }
    return (
        <div>
            <h1>Todo App</h1>
            <input type='text' value={title} placeholder='Enter todo title' onChange={e=>setTitle(e.target.value)} />
            <input type='text' value={description} placeholder='Enter todo description' onChange={e=>setDescription(e.target.value)} />
            <button onClick={handleSubmit}>Add Todo</button>
            <button onClick={handleSubmit}>Status filter</button>
        </div>
    );
};

export default Input;