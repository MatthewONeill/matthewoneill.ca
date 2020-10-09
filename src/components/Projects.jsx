import React from 'react';
import '../App.css';
import towerdefense from '../images/towerdefense.png';
import concentration from '../images/concentration.png';
import trivia from '../images/trivia.png';

class Projects extends React.Component{
    render(){
        return(
            <div>
                <div class="row projects" id="projects">
                    <div class="col" align="center">
                        <h2 style={{paddingTop: "60px"}}><span role="img" aria-label="laptop">&#128187;</span> Projects</h2>
                        <hr style={{width: "320px", backgroundColor: "#D8DEE9", marginBottom: "50px"}}></hr>
                    </div>
                </div>

                <div class="row projects" style={{paddingBottom: "25px"}}> 
                    <div class="col" align="center">
                        <a href="https://github.com/MatthewONeill/Tower-Defense-Game"><img src={towerdefense} alt="" class="projectImg"></img></a>
                        <a href="https://github.com/MatthewONeill/Tower-Defense-Game"><h4>Tower Defense Game</h4></a>
                        <p>
                        -First level of a tower defense game
                        <br/>
                        -Made with python and pygame
                        </p>
                    </div>

                    <div class="col" align="center">
                        <a href="https://github.com/MatthewONeill/cardMemoryGame"><img src={concentration} alt="" class="projectImg"></img></a>
                        <a href="https://github.com/MatthewONeill/cardMemoryGame"><h4>Concentration</h4></a>
                        <p>
                        -Matching card game
                        <br/>
                        -Made with Node, HTML, CSS, Vanilla Javascript
                        </p>
                    </div>

                    <div class="col" align="center">
                        <a href="https://github.com/MatthewONeill/triviaGameSessions"><img src={trivia} alt="" class="projectImg"></img></a>
                        <a href="https://github.com/MatthewONeill/triviaGameSessions"><h4>Trivia Game</h4></a>
                        <p>
                        -Trivia Game with sessions
                        <br/>
                        -Made with MongoDB, Mongoose, Node, Javascript, HTML
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;