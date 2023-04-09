import './App.css';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <a href='/create'>create</a>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route>
            <Create/>
          </Route>
        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;
