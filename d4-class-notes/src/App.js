import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import './App.css';
import About from './About.js';
import Home from './Home.js';
import Roster, { Player } from './Roster.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to the Routing Lecture!</h2>
        </div>
        <HashRouter>
          <div>
            <div>
              {/* Link needs to be in the HashRouter or it won't work */}
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/roster'>Roster</Link>
            </div>
              {/* if the route was /ab it wouldn't matter, the confusion comes from the slashes so the word exact really only needs to be on that one path. Why do you not do exact to everything? Well, if you put that on About then it's child routes wouldn't load. That's a problem. You only want to use exact on a component that has no child routes and is the only component that will be loaded with that route */}
              <Route exact path='/' component={Home}/>
              <Route path='/about' component={About}/>
              
              <Switch>
                <Route path='/roster/:id' component={Player}/> 
                {/* order is super important, it will only load the first route that matches the url */}
                <Route path='/roster' component={Roster}/>
              </Switch>
          </div>
        </HashRouter>
      
      </div>
     
    );
  }
}

export default App;
