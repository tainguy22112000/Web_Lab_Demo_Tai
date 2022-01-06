
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Resources from './components/pages/Resouces';
import Project from './components/pages/Project';
import Courses from './components/pages/Courses';
import {BrowserRouter as Router, Switch, Route} 
from'react-router-dom';
import SignUp from './components/pages/SignUp';



function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Switch>
          <Route path ='/' exact component={Home}/>
          <Route path = '/resources' component = {Resources}/>
          <Route path = '/project' component = {Project}/>
          <Route path = '/courses' component = {Courses}/>
          <Route path = '/sign-up' component = {SignUp}/>

        </Switch>
      </Router>
    </>
  );
}

export default App;
