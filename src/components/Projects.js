import React from 'react';
import Slider from './Slider';
import Fade from 'react-reveal/Fade';



const Projects=()=>{
    return (
        <div className="projects-wrapper">
        <Fade>
            <h1 style={{textAlign:'center',color:'white',fontSize:'3rem',padding:'3rem',fontWeight:'500'}}>Projects
            <hr style={{width:'5rem', margin:'0 auto',border:'1px solid #74FC3B'}}/></h1>
        </Fade>    
            <Slider/>
        </div>
    );
}

export default Projects;