import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Menu from './Components/home';
import Register from './Components/signin';
import Login from'./Components/loginpage';


const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/register">
          <Register/>
        </Route>
      <Route path="/home">
          <Menu></Menu>
        </Route>

    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
