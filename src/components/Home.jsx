import React from 'react';
import '../App.css';
import me from '../images/misc/me.png';


class Home extends React.Component{

    render(){
        return(
            <div class="row align-items-center home" id="home">
                <div class="col aboutright">
                    <img src={me} alt=""></img>
                </div>

                <div class="col aboutleft">
                    <h2 style={{color: "white"}}>Hey, I'm Matthew</h2>
                    <a href="https://www.github.com/MatthewONeill" class="homeLinks"><i class="fab fa-github-square fa-4x" style={{color: "white"}}></i></a>
                    <a href="https://www.linkedin.com/in/matthew-o-neill-4717641a1/" class="homeLinks"><i class="fab fa-linkedin fa-4x" style={{color: "white"}}></i></a>
                </div>
            </div>
        );
    }
}

export default Home;