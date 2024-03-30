import React from 'react'
import styles from "./Contact.module.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const Contact = () => {
  return (
    <section id='contact' className={styles.section}>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className={styles.container}>
            <div className={styles.options}>
                <article className={styles.option}>
                <MdOutlineMailOutline className={styles.icon}/>
                <h4>Email</h4>
                <h5>anfacmohamed62@gmail.com</h5>
                <a href="mailto:anfacmohamed62@gmail.com" target='_blank'>Send a message </a>
                </article>

                <article className={styles.option}>
                <FaLinkedinIn className={styles.icon} />
                <h4>Linked In</h4>
                <h5>anfacmohamed62@gmail.com</h5>
                <a href="https://www.linkedin.com/in/anfa03" target='_blank'>Send a message </a>
                </article>

                <article className={styles.option}>
                <FaWhatsapp className={styles.icon} />
                <h4>WhatsApp</h4>
                <h5>+252614804316</h5>
                <a href="https://api.whatsapp.com/send?phone=+252614804316" target='_blank'>Send a message </a>
                </article>
                </div>
                <form action="">
                    <input type="text" name="name" placeholder='Your Full Name' required />
                    <input type="email" name="email" placeholder='Your Email' required />
                    <textarea name="message" placeholder='Your Massage'  rows="7"></textarea>
                    <button className={styles.btn} type='submit'>Send Message</button>
                </form>



            
        </div>
    </section>

  )
}

export default Contact
