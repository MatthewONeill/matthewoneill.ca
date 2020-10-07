import React from 'react';


class Navbar extends React.Component{

    render(){
        return(
            <nav class="navbar navbar-expand navbar-light bg-light nbarExpand">
                <a class="navbar-brand" href="#">Home</a>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Education/Experience</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact Me</a>
                    </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;