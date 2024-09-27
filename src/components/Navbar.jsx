import React from 'react'
import '../component-css/Navbar.css'
import { CiSun } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";

function Navbar({isDarkmode, toggleTheme}) {
  return (
    <div className='bar'>
        <h1>Sorting Algorithm Visualizer</h1>
        
        <div className="right">
            {isDarkmode ? (
                <CiSun className="theme-icon" onClick={toggleTheme}/> 
            ) : (
                <FaRegMoon className="theme-icon" onClick={toggleTheme}/>
            )
            }
        </div>
    </div>
  )
}

export default Navbar  