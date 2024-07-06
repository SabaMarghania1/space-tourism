import { Link, NavLink } from 'react-router-dom'
import styles from './HomePage.module.css'
import Header from '../Components/Header/Header'
export default function HomePage() {
  return (
    <div className={styles.homePage}>
       <Header/>
       <main className={styles.main}>
        <section className={styles.textContent}>
          <h3 className={styles.subheading}>
          SO, YOU WANT TO TRAVEL TO
          </h3>
          <h1 className={styles.title}>
          SPACE
          </h1>
          <p className={styles.paragraph}>
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </section>
       <Link to="/destinations"><button className={styles.button}>Explore</button></Link>

       </main>
    </div>
  )
}
