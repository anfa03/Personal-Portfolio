import React from 'react'
import styles from "./Footer.module.css"
import { getImageUrl } from '../../Utils'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
  <footer>
  <a href="#" className={styles.logo}>Anfa</a>

  <ul className={styles.links}>
      <li><a href="#hero">Home</a></li>
      <li><a href="#bio">Bio</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact Me</a></li>
      
  </ul>

  <div className={styles.socials}>
      {/* <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" > <a href="anfacmohamed62@gmail.com"></a> </img>
      <a href="anfacmohamed62@gmail.com"> <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" /></a>
      <a href="https://www.linkedin.com/in/anfa03"> <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon" /></a>
      <a href="https://github.com/anfa03"> <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" /></a> */}
      <a href="anfacmohamed62@gmail.com"> <MdOutlineMailOutline /></a>
      <a href="https://www.linkedin.com/in/anfa03"><FaLinkedinIn /></a>
      <a href="https://github.com/anfa03"><BsGithub /></a>
  </div>
  <div className={styles.copyright}>
      <small> &copy; Anfa. All rights reserved.</small>
  </div>
</footer>
    
  )
}


export default Footer
