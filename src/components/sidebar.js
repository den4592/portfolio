import React from "react";
import { slide as Menu } from "react-burger-menu";
import {Link} from 'react-scroll';

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <nav>
           
                        <li className="menu-item"><Link activeClass="active" to="home-container" spy={true} smooth={true}>Home</Link>
                        </li>
                        
                        <li className="menu-item">
                            <Link  to="about-wrapper" spy={true} smooth={true}>About</Link>
                        </li>
                
                        <li className="menu-item">
                            <Link  to="skills-wrapper" spy={true} smooth={true}>Skills</Link>
                        </li>
                    
                        <li className="menu-item">
                            <Link  to="projects-wrapper" spy={true} smooth={true}>Projects</Link>
                        </li>
                    
                        <li className="menu-item">
                            <Link  to="contact-container" spy={true} smooth={true}>Contact</Link>
                        </li>
                        
                        <li className="menu-item">
                            <i className="fas fa-code" style={{color:'#e52885', fontSize:'2rem'}} ></i>
                        </li>
                    
             
                
            </nav>
    </Menu>
  );
};
