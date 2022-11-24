import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio6.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
             <img src={IMG1} alt="" />
          </div>
          <h3>A Travel Website using Php and MySQL </h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Coming Soon!</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
             <img src={IMG2} alt="" />
          </div>
          <h3>Jarvis AI dekstop Voice Assistant using Python</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Coming Soon!</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
             <img src={IMG3} alt="" />
          </div>
          <h3>Sorting Visualizer using Data Sturctures and Algorithms</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Coming Soon!</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default portfolio