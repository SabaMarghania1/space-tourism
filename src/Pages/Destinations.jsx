
import styles from './Destinations.module.css'

import Header from "../Components/Header/Header"
import { useState } from 'react'
export default function Destinations({ destinations }) {
  const [selectedTab, setSelectedTab] = useState("moon");

  const destination = destinations.find(destination => destination.name.toLowerCase() === selectedTab.toLowerCase());

  const destinationsName = destinations.map(dest => dest.name.toUpperCase());

  const handleTabClick = (dest) => {
    setSelectedTab(dest.toLowerCase());
  };

  return (
    <div className={styles.destinationsPage}>
      <Header />
      <main className={styles.main}>
        <section className={styles.container__header}>
          <p className={styles.subheading}><span className={styles.number}>01</span> PICK YOUR DESTINATION</p>
          <div className={styles.imageContainer}>
            <img src={destination.images.png} alt={destination.name} className={styles.image} />
          </div>
        </section>
        <section className={styles.container__content}>

          <div className={styles.tabContainer}>
            {destinationsName.map(dest => {
              const isActive = selectedTab === dest.toLowerCase()
               return  <button
                key={dest}
                className={`${styles.tabsButton} ${isActive ? styles.active: ""}`}
                onClick={() => handleTabClick(dest)}
              >
                {dest}
              </button>
            }
     
            )}
          </div>

          <div className={styles.textInformation}>
              <div className={styles.top}>
                <h1 className={styles.title}>{destination.name}</h1>
                <p className={styles.paragraph}>{destination.description}</p>
              </div>  
              <div className={styles.bottom}>
                <p className={styles.details}>
                  <span>AVG. DISTANCE</span>
                  {destination.distance.toUpperCase()}
                </p>
                <p className={styles.details}>
                  <span>EST. TRAVEL TIME</span>
                  {destination.travel.toUpperCase()}
                </p>
              </div>
          </div>    

        </section>
      </main>
    </div>
  );
}