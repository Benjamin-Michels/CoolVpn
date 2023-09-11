import React from 'react'
import imgman from '../assets/2.PNG'
import { FaTwitter } from "react-icons/fa";
import '../styles/reviews.css'


const reviews = () => {
  return (
    <body className='review-body'>
        <h1 className='review-header'>Take it from the coolest people we know</h1>

        <div className='review-cards'>

            <div className='review-card'>
                <img className='review-img' src={imgman} alt="" />
                <p className='review-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Corrupti ullam iste vitae odio nisi reiciendis voluptates, 
                    illum debitis non veniam ipsum itaque.
                </p>
                <p className='review-name'>
                <FaTwitter className='fa-infocon' icon={FaTwitter} />
                    SomeDudeOnTwitter</p>
            </div>

            <div className='review-card'>
                <img className='review-img' src={imgman} alt="" />
                <p className='review-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Corrupti ullam iste vitae odio nisi reiciendis voluptates, 
                    illum debitis non veniam ipsum itaque.
                </p>
                <p className='review-name'>
                <FaTwitter className='fa-infocon' icon={FaTwitter} />
                    SomeDudeOnTwitter</p>
            </div>

            <div className='review-card'>
                <img className='review-img' src={imgman} alt="" />
                <p className='review-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Corrupti ullam iste vitae odio nisi reiciendis voluptates, 
                    illum debitis non veniam ipsum itaque.
                </p>
                <p className='review-name'>
                <FaTwitter className='fa-infocon' icon={FaTwitter} />
                    SomeDudeOnTwitter</p>
            </div>

            <div className='review-card'>
                <img className='review-img' src={imgman} alt="" />
                <p className='review-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Corrupti ullam iste vitae odio nisi reiciendis voluptates, 
                    illum debitis non veniam ipsum itaque.
                </p>
                <p className='review-name'>
                <FaTwitter className='fa-infocon' icon={FaTwitter} />
                    SomeDudeOnTwitter</p>
            </div>

            <div className='review-card'>
                <img className='review-img' src={imgman} alt="" />
                <p className='review-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Corrupti ullam iste vitae odio nisi reiciendis voluptates, 
                    illum debitis non veniam ipsum itaque.
                </p>
                <p className='review-name'>
                <FaTwitter className='fa-infocon' icon={FaTwitter} />
                    SomeDudeOnTwitter</p>
            </div>

            <div className='review-card'>
                <img className='review-img' src={imgman} alt="" />
                <p className='review-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Corrupti ullam iste vitae odio nisi reiciendis voluptates, 
                    illum debitis non veniam ipsum itaque.
                </p>
                <p className='review-name'>
                <FaTwitter className='fa-infocon' icon={FaTwitter} />
                    SomeDudeOnTwitter</p>
            </div>

        </div>
        
    </body>
  )
}

export default reviews