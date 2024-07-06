import styles from './Crew.module.css'
import Header from "../Components/Header/Header"
import { useState } from 'react'

export default function Crew({crew}) {
const [tab,setTab] = useState("Commander")

const activeCrew = crew.find(member=>member.role === tab)

const handleClick = (role)=>{
  setTab(role)
}

console.log(activeCrew)

  return (
    <div className={styles.crewPage}>
      <Header/>

      <main className={styles.main}>
        <h3 className={styles.subtitle}><span>02</span> MEET YOUR CREW</h3>
        <div className={styles.content__container}>
    <div className={styles.first}>
        <div className={styles.content}>
                <div className={styles.content__header}>
                  <p className={styles.role}>{activeCrew.role.toUpperCase()}</p>
                  <h3 className={styles.title}>{activeCrew.name.toUpperCase()}</h3>
                </div>
                <p className={styles.paragraph}>{activeCrew.bio}</p>


        
        </div>
        <div className={styles.pagination}>
              {crew.map(member=>{
                const isActive = tab===member.role
                return <span key={member.name} className={`${styles.circle} ${isActive? styles.active:""}`} onClick={()=>handleClick(member.role)}></span>

              })}
      
        </div>  
    </div>
        <div className={styles.image__container}>
          <img src={activeCrew.images.png} alt="Crew member" />
        </div>
        </div>
      </main>
    </div>
  )
}
