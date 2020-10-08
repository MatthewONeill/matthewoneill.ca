import React from 'react';
import '../App.css';

class Navbar extends React.Component{

    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top navbar-custom">
                <a class="navbar-brand" href="#home" style={{color: "#81A1C1"}}>Matthew O'Neill</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#projects" style={{color: "#81A1C1"}}>Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#experience" style={{color: "#81A1C1"}}>Education/Experience</a>
                    </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;

