import React from 'react';
import styled from "styled-components";

const StyledButton=styled.button`
    cursor:pointer;
    border:none;
    width:12rem;
    height:3.5rem;
    background:linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673);
    border-radius:1rem;
    color:white;
    font-size:1.2rem;

    &:active,
    &:hover,
    &:focus {
        background-position: 100% 0;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
    background-image: linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673);
    box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);


    -webkit-animation: mover 1s infinite  alternate;
    animation: mover 1s infinite  alternate;

      @-webkit-keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
  
  @keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }

`;

function ProjectsButton({children }) {
  return <StyledButton >{children}</StyledButton>;
}

export default ProjectsButton;