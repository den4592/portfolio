import React from 'react';
import {Link} from 'react-scroll';
import SideBar from "./sidebar";



const Header=()=>{
  
    return(
         <SideBar SideBar pageWrapId={"page-wrap"} outerContainerId={"Header"} >
         <div id="page-wrap">
        </div>
        </SideBar>
  
    );
}

export default Header;
