import { NavLink } from 'react-router-dom'
import styles from './Logo.module.css'

import React, { useEffect, useState } from 'react'



export default function Logo() {
const [isMobile,setIsMobile]= useState(false)

useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if(isMobile){
    return <NavLink to="/">
<img src="/shared/logo.svg" alt="" />

    </NavLink>
  }
  

  return (
<img src="/shared/logo.svg" alt="" />
  )
}
