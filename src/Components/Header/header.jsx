import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/img25.png'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Utkarsh Singh</h1>
        <h5 className="text-light">An Aspiring Developer</h5>
       <CTA/>
       <HeaderSocials/>

       <div className="me">
        <img src={ME} alt="me" />
       </div>

       <a href="#Contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header