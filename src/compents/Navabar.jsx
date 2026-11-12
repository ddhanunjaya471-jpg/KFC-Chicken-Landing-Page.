import React from 'react'

import logo from "../images/logo.webp";
import '../compents/App.css'

function Navabar(){
    return(
        <>
          <div className="navabar">
           
           <img src={logo} alt='logo_kfc'></img>
           <ul>
             <li>MENU</li>
             <li>LOCATION</li>
             <li>ABOUT</li>
             <li>CONATCT</li>
           </ul>
           <button className='btn1'>Login</button>
         </div>
        </>
    )
}

export default Navabar