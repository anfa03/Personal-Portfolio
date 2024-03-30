import React from 'react'
import skills from "../../data/skills.json";
import { getImageUrl } from '../../Utils';
import Styles from "./MySkills.module.css";

const MySkills = () => {
  return (
   <section id='skills' className={Styles.container}>
    <div className={Styles.headingContiner}>
    <h2 className={Styles.maintitle}>Skills</h2>
    </div>
    {/* <div className={Styles.content}> */}
      <div className={Styles.skillsContainer}>
        {
        skills.map((skill, id)=>{
          return (
          <div key={id} className={Styles.skillCard}>
            <div className={Styles.skillImgContainer}>
              <img src={getImageUrl(skill.imageSrc)} alt={skill.title} className={Styles.skillImg}/>
              </div>
              <div className={Styles.cardContent}>
                <h3 className={Styles.title}>{skill.title}</h3>
                <p className={Styles.description}>{skill.descrption}</p>
              </div>
            
          </div>
          );
          })
        }
      </div>
      
    {/* </div> */}
   </section>);
  
}

export default MySkills
