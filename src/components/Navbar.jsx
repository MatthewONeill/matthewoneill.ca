import React from 'react';
import '../App.css';

class Navbar extends React.Component{

    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-custom fixed-top">
                <a class="navbar-brand" href="#" style={{color: "#81A1C1"}}>Matthew O'Neill</a>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#" style={{color: "#81A1C1"}}>Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" style={{color: "#81A1C1"}}>Education/Experience</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" style={{color: "#81A1C1"}}>Contact Me</a>
                    </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;