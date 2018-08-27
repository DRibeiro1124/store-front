import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import Navigation from './Components/Navigation';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Movies from './Components/Movies'


class App extends Component {



  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <section className="intro-container">
              <h1 className="intro">Welcome to Blockbuster Video 2.0</h1>
              </section>
              <section>  
                <span className="creation">Created by:</span>
                <span className="creator">Dino Ribeiro</span>
              </section>
              <section>
                <Navigation />
              </section>
          </header>
          <section>
          <Switch>
            <Route path= "/" exact component={Home} />
            <Route path= "/:movies" exact component={Movies} />
          </Switch>        
          </section>
          
        </div>
      </Router>
    );
  }
}

export default App;
