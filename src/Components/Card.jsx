
import React from 'react';

const Card = ({element,index,deleteTodo}) => {
    return (
        <div>
             <h1>My Todo's</h1>
            <div key={index}>
           
                id:<h2>{element.id}</h2>
                Name:<h2>{element.title}</h2>
                Description:<h3>{element.description}</h3>
                Status:<select>
                    <option >Completed</option>
                    <option >NotCompleted</option>
                </select>
                <button>Edit</button>
                

                <button onClick={()=>deleteTodo(element.id)}>Delete</button>
            </div>
            
             
        </div>
    );
};

export default Card;
