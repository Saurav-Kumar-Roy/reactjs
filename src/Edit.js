import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Edit = () => {
    const { id } = useParams();
    const { data: task, error, isPending } = useFetch('http://localhost:8000/tasks/' + id);
    const history = useHistory();

    const [title, setTitle] = useState(task.title);
    const [body, setBody] = useState(task.body);
    const [isDone, setisDone] = useState(task.isDone);


  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { title, body, isDone, id };

    fetch('http://localhost:8000/tasks/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task)
    }).then(() => {
      // history.go(-1);
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Task title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Task description:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={isDone}
          onChange={(e) => setisDone(e.target.value)}
        >
          <option value={false}>pending</option>
          <option value={true}>done</option>
        </select>
        <button>Done</button>
      </form>
    </div>
  );
}
 
export default Edit;