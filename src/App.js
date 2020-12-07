/* ==============================
    Project:        "TR" Dev Frontend 
    Version:        3.0 react.js
    Author:         Theja Rasanjalee
    Primary use:    Corporate, Business Themes.
    Email:          ugthejaugamage@gamil.com
    Follow:         https://twitter.com/TRasanjalee
    Like:           https://www.facebook.com/theja.rasanjalee 
================================== */



import React from 'react';
import './App.css';
import Navebar from './components/navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <Router>  
      <Navebar />
<Switch>
  <Route path='/' exact component={Home}/>
  <Route path='/sign-up' exact component={SignUp}/>
</Switch>

    </Router>

   </>
  );
}

export default App;
