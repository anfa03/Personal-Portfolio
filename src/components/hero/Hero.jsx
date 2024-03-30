import React from 'react'
import { getImageUrl } from '../../Utils';
import styles from "./hero.module.css"

const Hero = () => {
  return <section id='hero' className={styles.container}>
    <div className={styles.content}>
      <span className={styles.hello}>Hello,</span>
      <span className={styles.title}>I'm <span className={styles.name}>Anfa</span> <br />Web Developer </span>
        {/* <h1 className={styles.title}>I'm Anfa</h1> */}
        {/* <h2 className={styles.specilized}>A r</h2> */}
        <p className={styles.description}>My mission is to transform your ideas into visually stunning and highly functional websites</p>
        <button className={styles.contactBtn}>
        <a href="#contact">Contact Me</a>
        </button>
        
    </div>
    <img className={styles.heroImg} src={getImageUrl("hero/heroImage.jpeg")} alt="Hero Image of cartoon" />
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur} />
  </section>


}

export default Hero
