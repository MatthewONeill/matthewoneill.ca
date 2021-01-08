import React from 'react';
import '../App.css';
import feenics from '../images/experience/feenics.png';
import independent from '../images/experience/independent.png';
import carleton from '../images/experience/carleton.png';


class Experience extends React.Component{
    render(){
        return(
            <div>
                <div class="row text-center" style={{padding: "50px"}} id="experience">
                    <div class="col">
                        <h2>Carleton University</h2>
                        <hr class="mobileLine"></hr>
                        <p>2018 - Present</p>
                        <p>Third Year Standing</p>
                        <p>10.1/12 GPA</p>
                        <p>Deans List</p>

                        <img src="https://img.icons8.com/color/48/000000/python.png" alt=""/>
                        <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png" alt=""/>
                        <img src="https://img.icons8.com/color/48/000000/javascript.png" alt=""/>
                        <img src="https://img.icons8.com/color/48/000000/html-5.png" alt=""/>
                        <img src="https://img.icons8.com/color/48/000000/css3.png" alt=""/>
                        <img src="https://img.icons8.com/color/48/000000/c-programming.png" alt=""/>
                        <img src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" alt=""/>
                    </div>

                    <div class="col d-flex justify-content-center align-items-center">
                        <img src={carleton} alt="" class="img-fluid mobileImage" style={{minWidth: "200px"}}></img>
                    </div>
                </div>

                <hr style={{color: "#333", backgroundColor: "#333"}}></hr>

                <div class="row text-center" style={{padding: "50px"}}>
                    <div class="col">
                        <h2>Feenics</h2>
                        <hr class="mobileLine"></hr>
                        <p>May 2020 - December 2020</p>
                        <p>Software Development Co-op</p>

                        <img src="https://img.icons8.com/color/48/000000/c-sharp-logo.png" alt=""/>
                        <img src="https://img.icons8.com/color/48/000000/selenium-test-automation.png" alt=""/>
                        <img src="https://img.icons8.com/color/48/000000/amazon-web-services.png" alt=""/>
                    </div>

                    <div class="col d-flex justify-content-center align-items-center">
                        <img src={feenics} alt="" class="img-fluid mobileImage" style={{minWidth: "200px"}}></img>
                    </div>
                </div>

                <hr style={{color: "#333", backgroundColor: "#333"}}></hr>

                <div class="row text-center" style={{padding: "50px"}}>
                    <div class="col">
                        <h2>Independent</h2>
                        <hr class="mobileLine"></hr>
                        <p>July 2017 - May 2020</p>
                        <p>Customer Service</p>
                        <p>Service Clerk</p>
                        <p>Cashier</p>
                        <p>Garden Centre</p>
                    </div>

                    <div class="col d-flex justify-content-center align-items-center">
                        <img src={independent} alt="" class="img-fluid mobileImage" style={{minWidth: "200px"}}></img>
                    </div>
                </div>

                <hr style={{color: "#333", backgroundColor: "#333"}}></hr>
            </div>
        );
    }

}

export default Experience;