import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home.js'

import ContactUs from './ContactUs';

function App() {
  return (
    <Router>
      
        <Switch>
           <Route path='/' exact component={Home} />
           <Route path='/contactus' exact component={ContactUs} />
        </Switch>
    </Router>
  );
}

export default App;