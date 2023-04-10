import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TaskDetails from './TaskDetails';
import Navbar from './Navbar';
import Edit from './Edit';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/tasks/:id">
              <TaskDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
