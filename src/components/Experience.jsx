import React from 'react';
import '../App.css';
import feenics from '../images/feenics.png';
import independent from '../images/independent.png';
import carleton from '../images/carleton.png';
import placeholder from '../images/placeholder.png';

class Experience extends React.Component{
    render(){
        return(
            <div>
                <div class="row experience" id="experience">
                    <div class="col" align="center">
                        <h2 style={{marginBottom: "20px", marginTop: "60px"}}><span role="img" aria-label="book">&#128214;</span> Education/Experience</h2>
                        <hr style={{width: "320px", backgroundColor: "#D8DEE9", marginBottom: "50px"}}></hr>
                    </div>
                </div>
            
                <div class="row experience" style={{border: "5px"}}>
                    <div class="col" align="center">
                        <fieldset class="border-bottom" style={{paddingBottom: "20px"}}>  
                        <img src={feenics} style={{width: "330px", height: "89px", marginBottom: "30px"}} alt=""></img>
                        <p>Feenics</p>
                        <p>May 2020 - December 2020</p>
                        <p>Software Development Co-op</p>
                        </fieldset>
                        <fieldset class="mobileLine">
                        <img src={independent} alt="" style={{width: "300px", height: "60px", marginTop: "30px"}}></img>
                        <p>Kings</p>
                        <p>July 2017 - May 2020</p>
                        <p>Customer Service, Service Clerk, Cashier, Garden Centre</p>
                        </fieldset>
                    </div>
                    <div class="col" align="center">
                        <fieldset class="border-bottom mobileLine2" style={{paddingBottom: "20px"}}>
                        <img src={carleton} alt="" class="carleton" style={{marginBottom: "30px"}}></img>
                        <p>Carleton University</p>
                        <p>2018-Present: Third Year Standing</p>
                        <p>10.1/12.0 CGPA: Deans List</p>
                        </fieldset>
                        <fieldset>
                            <p style={{fontSize: "150%", marginTop: "30px"}}>Future Opportunities</p>
                            <p>Interested in opportunities with web development, app development</p>
                        </fieldset>
                    </div>  
                </div>
            </div>
        );
    }

}

export default Experience;