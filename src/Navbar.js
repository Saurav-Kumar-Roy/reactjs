import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>To Do app</h1>
      <div className="links">
        <Link to="/">Tasks</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Add Tasks</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;