import { useSelector, useDispatch } from "react-redux";
import { add,del,update } from './todoSlice';
import react from "react";


export const Todoview = () =>{

    const [title, setTitle] = react.useState('');
    const [body, setBody] = react.useState('');
    var [isDone, setisDone] = react.useState(false);
    const [id,setId] = react.useState(4);
    const [edit,setEdit] = react.useState(false);
    const [index,setIndex] = react.useState(-1);

    const data = useSelector((state)=>state.todo.data);
    const dispatch = useDispatch();
    console.log(data);


    const EditeData = (id) => {
        setEdit(true);
        var taskIndex = data.findIndex(obj => obj.id === id);
        setIndex(taskIndex);
  
        if (taskIndex !== -1) {
          // Update the title property of the object at the given index
          setTitle(data[taskIndex].title);
          setBody(data[taskIndex].body);
          setisDone(data[taskIndex].isDone);
        }
    }

    const CreateData = (e)=>{
        e.preventDefault();
        if (isDone ==='true')isDone=true;
        else isDone=false;
        if (edit){
            const newData = {id,title,body,isDone} ;
            const payload={
                newData,
                index
          }
          dispatch(update(payload));
          setEdit(false);
          setIndex(-1); 
        }
        else{
            setId(id+1);
            const newData = {id,title,body,isDone} ;
            dispatch(add(newData));  
        }
        setEdit(false);
        setTitle('');
        setBody('');
        setisDone(false);
    
      }

    return(
        <div>
            <form>
                <div>
                    <input 
                    type="text" 
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="title"
                    />
                </div>
                <div>
                    <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="body"
                    ></textarea>
                </div>
                <div>
                    <select
                    value={isDone}
                    onChange={(e) => setisDone(e.target.value)}
                    >
                    <option value={false}>pending</option>
                    <option value={true}>done</option>
                    </select>
                    <button onClick={CreateData}>Add</button>
                </div>
                    
            </form>

      {data.map(task => (
        <div key={task.id}>
        <hr/>
        <h2>{task.title}</h2>
        <p>{task.body}</p>
        {task.isDone&& <p>done</p>}
        {!task.isDone&& <p>pending</p>}
        <button onClick={()=>{dispatch(del(task.id))}}>delete</button>
        <button onClick={()=>{EditeData(task.id);}}>edit</button>
        </div>
      ))}
      <hr/>
    </div>
        
    )
}