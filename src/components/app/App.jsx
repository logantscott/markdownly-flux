import React from 'react';
import Home from '../home/Home';
import Document from '../document/Document';
import Header from '../header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Create from '../create/Create';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <hr />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/files' component={Create}/>
          <Route exact path='/editor' component={Document}/>
        </Switch>
      </Router>
    </>
  );
}
