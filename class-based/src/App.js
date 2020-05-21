import React from 'react';
import './App.css';
import ClassBased from './components/ClassBased';
import Lifecycle from './components/Lifecycle';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const App = () => {
  const [message, setMessage] = React.useState('hello from the parent');

  return (
    <div className="App">
      <h1>Class-Based Components!</h1>
      <Router>
        <Link to="/">ClassBased </Link>
        <Link to="/lifecycle">Lifecycle</Link>

        <Switch>
          <Route exact path="/lifecycle" component={Lifecycle} />
          <Route exact path="/">
            <ClassBased message={message} setMessage={setMessage}>
              <p>Where am I?</p>
            </ClassBased>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
