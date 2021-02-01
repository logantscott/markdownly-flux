import React from 'react';
import Home from '../home/Home';
import Document from '../document/Document';
import Header from '../header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import About from '../about/About';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <hr />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/files' component={Document}/>
          <Route exact path='/about' component={About}/>
        </Switch>
      </Router>
    </>
  );
}
