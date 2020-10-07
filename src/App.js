import React from 'react';
import './App.css';

import me from './images/me.png';
import towerdefense from './images/towerdefense.png';
import concentration from './images/concentration.png';
import trivia from './images/trivia.png';

function App() {
  return (
    <div class="container">

      <div class="row home">
        <div class="col" align="center">
          <img src={me} alt=""></img>
          <p>Hey, I'm Matthew O'Neill.</p>
        </div>
      </div>

      <div class="row projects">
        <div class="col" align="right">
          <p>Tower Defense Game</p>
          <img src={concentration} style={{maxWidth: "25%"}} alt=""></img>
          <p>Trivia Game</p>
        </div>
        <div class="col" align="left">
          <img src={towerdefense} style={{maxWidth: "25%"}} alt=""></img>
          <p>Card Memory Game</p>
          <img src={trivia} style={{maxWidth: "25%"}} alt=""></img>
        </div>
      </div>
      
      <div class="row experience">
        <div class="col" align="center">
          <p>Feenics</p>
          <p>Kings</p>
        </div>
        <div class="col" align="center">
          <p>Carleton</p>
          <p>Placeholder</p>
        </div>  
      </div>

      <div class="row experience">
        <div class="col" align="center">
          <h3>Contact Me</h3>
        </div>
      </div>



    </div>

  );
}

export default App;
