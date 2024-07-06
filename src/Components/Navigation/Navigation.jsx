
import {NavLink} from "react-router-dom"

import styles from './Navigation.module.css'
import { useState } from "react"



export default function Navigation() {
  const [isOpen,setIsOpen]= useState(false)

  const toggleMenu = ()=>{
    setIsOpen(!isOpen)
  }


  

  return (
    <nav className={styles.navigation}>
      <div className={`${styles.menuToggle} ${isOpen ? styles.activeMenu : ""}`} onClick={toggleMenu}>
          <img className={styles.hamburger} src={isOpen ? "/shared/icon-close.svg" : "/shared/icon-hamburger.svg"}/>
      </div>

      <ul className={`${styles.menu} ${isOpen ? styles.open:""}`}>
        <li><NavLink className="navLink"  to="/" onClick={toggleMenu} ><span>00</span> HOME</NavLink></li>
        <li><NavLink className="navLink" to="/destinations" onClick={toggleMenu} ><span>01</span> DESTINATION</NavLink></li>
        <li><NavLink className="navLink" to="/crew" onClick={toggleMenu} ><span>02</span>CREW</NavLink></li>
        <li><NavLink className="navLink" to="/technologys" onClick={toggleMenu} ><span>03</span> TECHNOLOGY</NavLink>
        </li>
      </ul>

    </nav>
  )
}
