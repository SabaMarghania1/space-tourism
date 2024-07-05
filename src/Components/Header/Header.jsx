
import Logo from '../SmallComponents/Logo'
import Navigation from "../Navigation/Navigation"

import styles from './Header.module.css'
import data from "../../data.json"

console.log(data)
export default function Header() {
  return (
    <header className={styles.header}>
      <Logo/>
      <Navigation/>
    </header>
  )
}
