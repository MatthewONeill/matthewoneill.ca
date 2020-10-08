import React from 'react';
import './App.css';
import Navbar from "./components/Navbar.jsx";

import me from './images/me.png';
import towerdefense from './images/towerdefense.png';
import concentration from './images/concentration.png';
import trivia from './images/trivia.png';
import feenics from './images/feenics24.png';
import independent from './images/independent.png';
import carleton from './images/carleton.png';
import placeholder from './images/placeholder.png';
import githubIcon from './images/githubIcon.png';
import linkedInIcon from './images/linkedInIcon.png';


function App() {
  return (
    <div>
      <Navbar/>
      <div class="container-fluid">
        <div class="row align-items-center home" id="home">
          <div class="col" align="center">
            <img src={me} alt=""></img>
            <p>Hey, I'm Matthew.</p>
            <a href="https://www.github.com/MatthewONeill" class="homeLinks"><img src={githubIcon} alt="" style={{width: "60px", height: "60px"}}></img></a>
            <a href="https://www.linkedin.com/in/matthew-o-neill-4717641a1/" class="homeLinks"><img src={linkedInIcon} alt="" style={{width: "50px", height: "50px"}}></img></a>
            <p>Email: matthewjo30@gmail.com</p>
          </div>
        </div>

        <div class="row projects">
          <div class="col" align="center">
            <h2 style={{paddingTop: "20px"}}>&#128187; Projects</h2>
            <hr style={{width: "350px", backgroundColor: "#D8DEE9", marginBottom: "40px"}}></hr>
          </div>
        </div>

        <div class="row projects" id="projects">
          <div class="col" align="center">
            <a href="https://github.com/MatthewONeill/Tower-Defense-Game"><img src={towerdefense} alt="" class="projectImg"></img></a>
            <a href="https://github.com/MatthewONeill/Tower-Defense-Game"><h4>Tower Defense Game</h4></a>
            <p>Some lorem ipsum</p>
          </div>
          <div class="col" align="center">
            <a href="https://github.com/MatthewONeill/cardMemoryGame"><img src={concentration} alt="" class="projectImg"></img></a>
            <a href="https://github.com/MatthewONeill/cardMemoryGame"><h4>Concentration</h4></a>
            <p>More lorem ipsum</p>
          </div>
          <div class="col" align="center">
            <a href="https://github.com/MatthewONeill/triviaGameSessions"><img src={trivia} alt="" class="projectImg"></img></a>
            <a href="https://github.com/MatthewONeill/triviaGameSessions"><h4>Trivia Game</h4></a>
            <p>Even more lorem ipsum</p>
          </div>
        </div>

        <div class="row experience" id="experience">
          <div class="col" align="center">
            <h2 style={{marginBottom: "20px", marginTop: "50px"}}>&#128214; Education/Experience</h2>
            <hr style={{width: "390px", backgroundColor: "#D8DEE9", marginBottom: "40px"}}></hr>
          </div>
        </div>
        
        <div class="row experience">
          <div class="col" align="center">
            <img src={feenics} style={{width: "50%"}} alt=""></img>
            <p>Feenics</p>
            <p>May 2020 - December 2020</p>
            <p>Software Development Co-op</p>
            <img src={independent} alt=""></img>
            <p>Kings</p>
            <p>July 2017 - May 2020</p>
            <p>Customer Service, Service Clerk, Cashier, Garden Centre</p>
          </div>
          <div class="col" align="center">
            <img src={carleton} alt="" class="carleton"></img>
            <p>Carleton University</p>
            <p>2018-Present</p>
            <p>10.1/12.0 CGPA</p>
            <p>Deans List</p>
            <p>Third Year Standing</p>
            <img src={placeholder} alt="" style={{height: "25%", width: "50%"}}></img>
            <p>Placeholder</p>
          </div>  
        </div>
      </div>
    </div>

  );
}

export default App;
