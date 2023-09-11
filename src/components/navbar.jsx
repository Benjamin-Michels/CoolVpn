import React from 'react'
import '../styles/navbar.css';


const navbar = () => {
  return (
    <div className='nav-bar'>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia"/>
        <h1 className='nav-logo'><span>Cool</span>VPN</h1>
        <button className='language-button'>English</button>
    </div>
  )
}

export default navbar