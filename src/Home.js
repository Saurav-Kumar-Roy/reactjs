import { useState,useEffect } from "react";

function Home(){

    const [id,setId] = useState(4)
    const [tasks,setTasks] = useState([
        {title:"task1",details:"this is task1",completed:true,"id":1},
        {title:"task2",details:"this is task2",completed:true,"id":2},
        {title:"task3",details:"this is task3",completed:true,"id":3}, 
    ]);

   

    function handleClick(id){
        const newArray = tasks.filter(item => item.id !== id);
        setTasks(newArray);
    }

    function handleAdd(title,detals){
        const newTask = {title:title,detals:detals,completed:false,id:id}
        setId(id+1);
        setTasks([...tasks,newTask])
    }

    return(
        <div>
            <h1> home page </h1>
            {tasks.map((task)=>(
              <div key={ task.id }>
                <h3>{ task.title }</h3>
                <p>{task.details}</p>
                { task.completed && <p>done</p> }
                { !task.completed && <p>pending</p>}
                <button>edit</button>
                <button onClick={() => handleClick(task.id)}>delete</button>
              </div>
            ))}  
        </div> 
    );
}

export default Home;