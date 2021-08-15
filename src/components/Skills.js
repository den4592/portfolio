import React from 'react';
import { Icon } from '@iconify/react';

const Skills=()=>{
    return(
        <div className="skills-wrapper">
            <h1 style={{textAlign:'center',color:'white',paddingTop:'3rem',fontSize:'3rem', fontWeight:'500',}}>Skills
            <hr style={{width:'5rem', margin:'0 auto',border:'1px solid #E52885'}}/></h1>
            
            <div className="skills-container">
                <div className="main-skills" >
                    <div className="main-text" style={{width:'5rem',height:'5rem', borderRadius:'1rem',textAlign:'center', backgroundColor:'#e52885'}}>
                        <span style={{color:'white'}}>Main</span>
                    </div>
                <div className="html-container" style={{width:'5rem',height:'5rem',border:'1px solid white', borderRadius:'1rem',textAlign:'center'}}>
                    <i class="fab fa-html5"></i>
                    <p style={{textAlign:'center',color:'white',fontSize:'.7rem'}}>HTML</p>
                </div>
                <div className="css-container" style={{width:'5rem',height:'5rem',border:'1px solid white', borderRadius:'1rem',textAlign:'center'}}>
                    <i class="fab fa-css3-alt"></i>  
                    <p style={{textAlign:'center',color:'white',fontSize:'.7rem'}}>CSS</p>
                </div>
                <div className="js-container" style={{width:'5rem',height:'5rem',border:'1px solid white', borderRadius:'1rem',textAlign:'center'}}>
                    <i class="fab fa-js"></i>
                    <p style={{textAlign:'center',color:'white',fontSize:'.7rem'}}>JavaScript</p>
                </div>
                <div className="react-container" style={{width:'5rem',height:'5rem',border:'1px solid white', borderRadius:'1rem',textAlign:'center'}}>
                    <i class="fab fa-react"></i>
                    <p style={{textAlign:'center',color:'white',fontSize:'.7rem'}}>React</p>
                </div>
                <div className="redux-container" style={{width:'5rem',height:'5rem',border:'1px solid white', borderRadius:'1rem',textAlign:'center'}}>
                    <Icon icon="simple-icons:redux" color="white" width="58" height="55.5" />
                    <p style={{textAlign:'center',color:'white',fontSize:'.7rem'}}>Redux</p>
                </div>
                 <div className="sass-container" style={{width:'5rem',height:'5rem',border:'1px solid white', borderRadius:'1rem',textAlign:'center'}}>
                    <i class="fab fa-sass"></i>
                    <p style={{textAlign:'center',color:'white',fontSize:'.7rem'}}>Sass</p>
                </div>
                <div className="bootstrap-container" style={{width:'5rem',height:'5rem',border:'1px solid white', borderRadius:'1rem',textAlign:'center'}}>
                    <i class="fab fa-bootstrap"></i>
                    <p style={{textAlign:'center',color:'white',fontSize:'.7rem'}}>Bootstrap</p>
                </div>
                
                </div>
                
                <div className="additional-skills">
                    <div className="additional-text" style={{width:'5rem',height:'5rem', borderRadius:'1rem',textAlign:'center',backgroundColor:'#2CBB76'}}>
                        <span style={{color:'white'}}>Additional</span>
                    </div>
                    <div className="git-container" style={{width:'5rem',height:'5rem',border:'1px solid white', borderRadius:'1rem',textAlign:'center'}}>
                        <i class="fab fa-git-alt"></i>
                        <p style={{textAlign:'center',color:'white',fontSize:'.7rem'}}>Git</p>
                    </div>
                    <div className="github-container" style={{width:'5rem',height:'5rem',border:'1px solid white', borderRadius:'1rem',textAlign:'center'}}>
                        <i class="fab fa-github"></i>
                        <p style={{textAlign:'center',color:'white',fontSize:'.7rem'}}>Github</p>
                    </div>
                    <div className="figma-container" style={{width:'5rem',height:'5rem',border:'1px solid white', borderRadius:'1rem',textAlign:'center'}}>
                        <i class="fab fa-figma"></i>
                        <p style={{textAlign:'center',color:'white',fontSize:'.7rem'}}>Figma</p>
                    </div>
                    
                </div>
            </div>
            
            
        </div>
    );
}

export default Skills;