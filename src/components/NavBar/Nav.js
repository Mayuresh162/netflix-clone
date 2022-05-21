import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();

    const transistionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transistionNavBar)
        return () => window.removeEventListener('scroll', transistionNavBar)
    }, [])

  return <div className={`nav ${show && 'nav__black'}`}>
      <div className='nav__contents'>
        <img className='nav__logo' src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='' onClick={() => navigate('/')}></img>
        <img className='nav__avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='' onClick={() => navigate('/profile')}></img>
      </div>
  </div>;
}

export default Nav