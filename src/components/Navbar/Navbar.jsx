import React,{useState} from 'react'
import styles from "./Navbar.module.css"
import { getImageUrl } from '../../Utils'

const Navbar = () => {
    const [menuOpen, setMenuOpen]=useState(false);
  return (

    <nav className={styles.navbar}>
        <a className={styles.title} href="#">Anfa</a>
        <div className={styles.menu}>
            <img           
            className={styles.menuBtn}
            src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
                />
                
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
                
                <li>
                <a href="#bio">Bio</a>
                </li>
                <li>
                <a href="#skills">Skills</a>
                </li>
                <li>
                <a href="#projects">Projects</a>
                </li>

                <li>
                <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
        
        
    </nav>
  )
}

export default Navbar
