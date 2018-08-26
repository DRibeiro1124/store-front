import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import Navigation from './Components/Navigation';


class App extends Component {



  render() {
    return (
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

        </section>
        <section>
          <Home />
        </section>
        
      </div>
    );
  }
}

export default App;
