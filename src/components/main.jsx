import React from 'react'
import '../styles/main.css';
import imgman from '../assets/2.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const main = () => {
  return (
    <body className='main-body'>
        <div className='container'>
            <div className='left-container'>
                <h1 className='header-text'>The VPN that makes you cool</h1>
                <p className='deal-text'>Get your first 20 years FREE</p>
                <button className='deal-button'>Start your free trial <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>

            <div className='right-image'>
                <img className='main-img' src={imgman} alt="" />
            </div>

        </div>
    </body>
  )
}

export default main