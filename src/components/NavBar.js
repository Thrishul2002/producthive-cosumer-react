import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/navbar.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  return (
    <nav className='navbar'>
        <ul className='nav-list'>
           
            <li className='nav-item'>
                <Link to="/" className='nav-link'>Home&nbsp;
                    <span>
                        <FontAwesomeIcon icon="home"/>
                    </span>
                </Link>    
            </li>

            <li className='nav-item'>
                <Link to="/products" className='nav-link'>Products&nbsp;
                    <span>
                        <FontAwesomeIcon icon="bomb"/>
                    </span>
                </Link>
            </li>

            <li className='nav-item'>
                <Link to="/dealers" className='nav-link'>DealerProfile&nbsp;
                    <span>
                        <FontAwesomeIcon icon="people-group"/>
                    </span>
                </Link>              
            </li>

            <li className='nav-item'>
                <Link to="/about" className='nav-link'>About Us&nbsp;
                    <span>
                        <FontAwesomeIcon icon="coffee"/>
                    </span>
                </Link>              
            </li>
        </ul>
    </nav>
  )
}

export default NavBar;