import React, { } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';

//import './style.scss';
//import About from './pages/About';


/**
 * App.js will manage all the links between pages
 */


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

/**
 *  <div className="">
          <Link to="/" className="" >home</Link>
         
        </div>
 *  <Link to="/about" className="" >About</Link>
 * <Route path="/about">
            <About />
          </Route>
 */


export default App;
