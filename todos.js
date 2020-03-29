// dumb comp
import React from 'react';
const Todos=({todos,deletetodo})=>{
    const todolist=todos.length?(
todos.map(item=>{
    return(<div className=" card-panel pink lighten-2 collection-item" key={item.id}>
<span onClick={()=>{deletetodo(item.id)}}><strong>{item.content}</strong></span> 

    </div>)
})):(
        <p>no todos present</p>
    )
    // in the above code we first see if  there are any todos in the list(todos.length), and thn we print all the todos on screen.
    return(<div className="todos collection">
{todolist}
    </div>)
}
export default Todos;