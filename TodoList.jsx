import {useState} from "react";
import {v4 as uuidv4} from "uuid";
export default function TodoList(){
    let [todo,settodo]=useState([{task:"Sample task",id:uuidv4()}]);
 let [newTodo,setNewTodo]=useState("");
 let addNewtask=()=>{
    settodo( (prevtodos)=>
        {
            return [...prevtodos,{task:newTodo ,id:uuidv4()}]
        });
    setNewTodo("");
 }
let updateValue=(event)=>{
   setNewTodo(event.target.value);
}
let deletetask=(id)=>{
     settodo(todo.filter((todo)=>{ todo.id!=id  }));
}
 let uppercaseall=()=>{
settodo(todo.map((todo)=>{
   return {
    ...todo,
    task:todo.task.toUppercase()
   }
})
);
 }
    return(
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateValue}></input>
            <br/>
            <button onClick={addNewtask}>Add task</button><br/>
            <br/>
            <hr></hr>
            <h3>Add Task</h3> 
            <ul>
                {todo.map((todo)=>{
                    return <li key={todo.id}>
                        <span> {todo.task}</span>
                        &nbsp;
                        <button onClick={()=>deletetask(todo.id)}>delete</button>
                       </li>
                })}
            </ul>
            <button onclick={uppercaseall}>Upper Case All</button>
        </div>
    );
}