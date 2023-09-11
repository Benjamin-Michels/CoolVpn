import React from 'react'
import '../styles/info.css';
import imglaptop from '../assets/1.PNG'
import { FaApple, FaWindows, FaAndroid, FaChrome, FaFirefox, FaGamepad, FaCar, FaLaptop, FaMobile, FaDatabase,FaDesktop } from "react-icons/fa";

const info = () => {
  return (
    <body className='info-body'>
        <h1 className='info-page-head'>Why choose Cool VPN?</h1>
        <div className='info-container'>
            <dir className='left-container'>
                <img className='main-img' src={imglaptop} alt="" />
            </dir>
            <div className='right-container-info'>
                <h2 className='info-card-head'>Everyone loves Cool VPN</h2>
                <p className='info-card-para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Soluta commodi delectus vero illum, dolores cumque reprehenderit, 
                    eius quas inventore consequuntur repellendus ad enim? Esse corrupti repellat fuga aspernatur. 
                    A, facere.
                </p>

                <div className='device-icons'>

                    <div className='icon-box'>
                        <FaApple className='fa-infocon' icon={FaApple} />
                    </div>
                    <div className='icon-box'>
                        <FaWindows className='fa-infocon' icon={FaWindows} />
                    </div>
                    <div className='icon-box'>
                        <FaAndroid className='fa-infocon' icon={FaAndroid} />
                    </div>
                    <div className='icon-box'>
                        <FaChrome className='fa-infocon' icon={FaChrome} />
                    </div>
                    <div className='icon-box'>
                        <FaFirefox className='fa-infocon' icon={FaFirefox} />
                    </div>
                    <div className='icon-box'>
                        <FaGamepad className='fa-infocon' icon={FaGamepad} />
                    </div>
                    <div className='icon-box'>
                        <FaCar className='fa-infocon' icon={FaCar} />
                    </div>
                    <div className='icon-box'>
                        <FaLaptop className='fa-infocon' icon={FaLaptop} />
                    </div>
                    <div className='icon-box'>
                        <FaMobile className='fa-infocon' icon={FaMobile} />
                    </div>
                    <div className='icon-box'>
                        <FaDatabase className='fa-infocon' icon={FaDatabase} />
                    </div>
                    <div className='icon-box'>
                        <FaDesktop className='fa-infocon' icon={FaDesktop} />
                    </div>


                </div>
                <button className='info-button'>Become Cool Today</button>

            </div>
        </div>
    </body>
  )
}

export default info