import React from 'react';
import Fade from 'react-reveal/Fade';
const Home=()=>{
    return(
        <div className="home-container">
           <div class="context"></div>

                <ul class="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                </ul>

            
          
            <div className="home-elements">
                    <Fade left cascade>                        
                        <h1 style={{color:'#D62469', fontSize:'7rem'}}>Welcome.</h1>
                    </Fade>
                    <Fade right>
                        <h3 style={{color:'white',fontSize:'6rem'}}><span style={{color:'#43F456'}}>To My Portfolio.</span></h3>
                    </Fade>

            </div>
        </div>
    );
}

export default Home;