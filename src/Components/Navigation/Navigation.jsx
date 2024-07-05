
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
        <li>
          <NavLink onClick={toggleMenu} to ="/">00 HOME</NavLink>
        </li>
        <li>
          <NavLink onClick={toggleMenu} to="/destinations">01 DESTINATION</NavLink>
        </li>
        <li>
          <NavLink onClick={toggleMenu} to="/crew">02 CREW</NavLink>
        </li>
        <li>
          <NavLink onClick={toggleMenu} to="/technologys">03 TECHNOLOGY</NavLink>
        </li>
      </ul>

    </nav>
  )
}
