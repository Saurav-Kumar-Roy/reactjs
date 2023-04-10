import { Link } from 'react-router-dom';

const TaskList = ({ tasks }) => {
  return (
    <div className="blog-list">
      {tasks.map(task => (
        <div className="blog-preview" key={task.id} >
          <Link to={`/tasks/${task.id}`}>
            <h2>{ task.title }</h2>
            { task.isDone && <p>done</p> }
            { !task.isDone && <p>pending</p> }
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default TaskList;