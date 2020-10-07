import React from 'react';
import './App.css';
import Navbar from "./components/Navbar.jsx";

import me from './images/me.png';
import towerdefense from './images/towerdefense.png';
import concentration from './images/concentration.png';
import trivia from './images/trivia.png';


function App() {
  return (
    <div class="container">
      <Navbar/>
     

      <div class="row home">
        <div class="col" align="center">
          <img src={me} alt=""></img>
          <p>Hey, I'm Matthew.</p>
        </div>
      </div>

      <div class="row projects">
        <div class="col" align="right">
          <p class="projectText">Tower Defense Game</p>
          <img src={concentration} alt="" class="projectImg"></img>
          <p class="projectText">Trivia Game</p>
        </div>
        <div class="col" align="left">
          <img src={towerdefense} alt="" class="projectImg"></img>
          <p class="projectText">Card Memory Game</p>
          <img src={trivia} alt="" class="projectImg"></img>
        </div>
      </div>
      
      <div class="row experience">
        <div class="col" align="center">
          <p>Feenics</p>
          <p>May 2020 - December 2020</p>
          <p>Software Development Co-op</p>
          <p>Kings</p>
          <p>July 2017 - May 2020</p>
          <p>Customer Service, Service Clerk, Cashier, Garden Centre</p>
        </div>
        <div class="col" align="center">
          <p>Carleton</p>
          <p>2018-Present</p>
          <p>Deans List</p>
          <p>Third Year Standing</p>
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
