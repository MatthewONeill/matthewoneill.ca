import React from 'react';
import '../App.css';
import tower_defense from '../images/projects/FFWW.png';
import concentration1000 from '../images/projects/concentration.png';
import triviaGame from '../images/projects/triviagame.png';
import movierecommender from '../images/projects/movierecommender.png';

class Projects extends React.Component{
    render(){
        return(
            <div style={{marginTop: "-16px"}}>
                <div class="row text-center" id="projects">
                    <div class="col-md-6 nopadding" id="first">
                        <a href="https://github.com/MatthewONeill/Tower-Defense-Game"><img src={tower_defense} class='img-fluid w-100' alt=""></img></a>
                    </div>

                    <div class="col-md-6 nopadding" id="second">
                        <h2>Fight Fire With Water</h2>
                        <p>Tech Stack: Python, Pygame | Team Size: 4</p>
                        <hr style={{width: "700px"}}></hr>
                        <p>A tower defense game developed for COMP1501</p>
                        <img src="https://img.icons8.com/color/48/000000/python.png" alt=""/>
                    </div>
                </div>

                <div class="row text-center">
                    <div class="col-md-6 nopadding" id="second">
                        <h2>Trivia Night</h2>
                        <p>Tech Stack: JavaScript, Node.js, Express.js, MongoDB | Team Size: 2</p>
                        <hr style={{width: "700px"}}></hr>
                        <p>A Trivia game developed for COMP2406</p>
                        <img src="https://img.icons8.com/color/48/000000/javascript.png" alt=""/>
                        <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt=""/>
                        <img src="https://img.icons8.com/color/48/000000/html-5.png" alt=""/>
                        <img src="https://img.icons8.com/color/48/000000/css3.png" alt=""/>
                        <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt=""/>
                    </div>
                    
                    <div class="col-md-6 nopadding" id="first">
                        <a href="https://github.com/MatthewONeill/triviaGameSessions"><img src={triviaGame} class="img-fluid w-100" alt=""></img></a>
                    </div>
                </div>

                <div class="row text-center">
                    <div class="col-md-6 nopadding" id="first">
                        <a href="https://github.com/MatthewONeill/movierecommender"><img src={movierecommender} class="img-fluid w-100" alt=""></img></a>
                    </div>
                    
                    <div class="col-md-6 nopadding" id="second">
                        <h2>Movie Recommender</h2>
                        <p>Tech Stack: MongoDB, Express.js, React.js, Node.js | Team Size: 2</p>
                        <hr style={{width: "700px"}}></hr>
                        <p>A Website that recommends movie using the TMDb API</p>
                        <p>Developed to learn the MERN stack</p>
                        <img src="https://img.icons8.com/color/48/000000/react-native.png" alt=""/>
                        <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt=""/>
                        <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt=""/>
                    </div>
                </div>


                <div class="row text-center">
                    <div class="col-md-6 nopadding" id="second">
                        <h2>Concentration</h2>
                        <p>Tech Stack: Node.js, JavaScript, HTML, CSS</p>
                        <hr style={{width: "700px"}}></hr>
                        <p>A card memory game</p>
                        <img src="https://img.icons8.com/color/48/000000/javascript.png" alt=""/>
                        <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt=""/>
                        <img src="https://img.icons8.com/color/48/000000/html-5.png" alt=""/>
                        <img src="https://img.icons8.com/color/48/000000/css3.png" alt=""/>
                    </div>

                    <div class="col-md-6 nopadding" id="first">
                        <a href="https://github.com/MatthewONeill/cardMemoryGame"><img src={concentration1000} class="img-fluid w-100" alt=""></img></a>
                    </div>
                </div>
                
                


            </div>
        );
    }
}

export default Projects;