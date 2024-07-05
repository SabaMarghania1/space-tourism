import { NavLink } from 'react-router-dom'
import styles from './HomePage.module.css'
import Header from '../Components/Header/Header'
export default function HomePage() {
  return (
    <div className={styles.homePage}>
       <Header/>
    </div>
  )
}
