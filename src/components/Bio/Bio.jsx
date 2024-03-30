import React from 'react'
import { getImageUrl } from '../../Utils'
import styles from "./Bio.module.css"

const Bio = () => {
  return <section id="bio" className={styles.container}>
    <h2 className={styles.title}>Bio</h2>
    
    <div className={styles.content}>
        <img className={styles.bioImage} src={getImageUrl("bio/bioImage.jpeg")} alt="cartoon sitting with laptop" />
        <ul className={styles.bioItems}> 
            <li className={styles.bioItem}>
                <img  src={getImageUrl("bio/backgroundIcon.png")} alt="" />
                <div className={styles.bioItemText}>
                    <h3>My Bacground</h3>
                    <p>I am a twenty-one-year-old aspiring web developer from and currently residing in Mogadishu, Somali, my birthplace and hometown.</p>
                </div>
            </li>
            <li className={styles.bioItem}>
                <img src={getImageUrl("bio/educationIcon.png")} alt="" />
                <div className={styles.bioItemText}>
                    <h3>My Education</h3>
                    <p>I earned my high school diploma and am currently in my third year of pursuing a Bachelor's degree in Computer Applications at Jamhuriya University.</p>
                </div>
            </li>
            <li className={styles.bioItem}>
                <img src={getImageUrl("bio/codeIcon.png")} alt="" />
                <div className={styles.bioItemText}>
                    <h3>What get me into coding?</h3>
                    <p>When I learned that coding is a way to create something from scratch using logic and creativity, I was hooked! It's a never-ending journey of learning, growth and exploration that continues to inspire me every day.</p>
                </div>
            </li>
        </ul>
    </div>
  </section>
}

export default Bio
