import React from 'react';
import '../App.css';
import me from '../images/me.png';
import githubIcon from '../images/githubIcon.png';
import linkedInIcon from '../images/linkedInIcon.png';

class Home extends React.Component{

    render(){
        return(
            <div class="row align-items-center home" id="home">
                <div class="col" align="center">
                    <img src={me} alt=""></img>
                    <p>Hey, I'm Matthew.</p>
                    <a href="https://www.github.com/MatthewONeill" class="homeLinks"><img src={githubIcon} alt="" style={{width: "60px", height: "60px"}}></img></a>
                    <a href="https://www.linkedin.com/in/matthew-o-neill-4717641a1/" class="homeLinks"><img src={linkedInIcon} alt="" style={{width: "50px", height: "50px"}}></img></a>
                    <p>Email: matthewjo30@gmail.com</p>
                </div>
            </div>
        );
    }
}

export default Home;