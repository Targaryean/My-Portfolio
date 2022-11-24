import React from 'react'
import './About.css'
import ME from '../../assets/img18.jpg'
import {FaGraduationCap} from 'react-icons/fa'
import {SiCodechef} from 'react-icons/si'
import {VscFolder} from 'react-icons/vsc'


const About = () => {
  return (
    <section id="About">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="My Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
           < FaGraduationCap className='about__icon'/>
              <h5>Education</h5>
              <small>B.tech, CE</small>
              <br />
              <small>CGPA: 8.99</small>
            </article>

            <article className='about__card'>
           < SiCodechef className='about__icon'/>
              <h5>Coding Profile</h5>
              <small>150+ Ques. on Leetcode Profile</small>
              <br />
              {/* <small>3 Star coder at CodeChef</small> */}
            </article>

            <article className='about__card'>
           < VscFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>3 upcoming projects</small>
            </article>
          </div>
        <p>
          Hi there, I am Utkarsh Singh a 3rd year undergrad pursuing my degree from National Institute of Technology, Silchar. I am an enthusiastic and responsible person with keen interest in industry demanding skills and a zest to learn something new. I am able to give my best both in a team environment as well as using own initiative.
        </p>

        <a href="#Contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About