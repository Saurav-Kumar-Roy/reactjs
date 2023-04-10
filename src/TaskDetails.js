import { useHistory, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import useFetch from "./useFetch";

const TaskDetails = () => {
  const { id } = useParams();
  const { data: task, error, isPending } = useFetch('http://localhost:8000/tasks/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/tasks/' + task.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }

  const handleEdit = () => {
    
  }

  return (
    <div className="blog-details">

      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { task && (
        <article>
          <h2>{ task.title }</h2>
          { task.isDone && <p>status: Done</p> }
          { !task.isDone && <p>status: Pending</p> }
          <div>{ task.body }</div>

          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleClick}>delete</button>
          
        </article>
      )}
    </div>
  );
}
 
export default TaskDetails;