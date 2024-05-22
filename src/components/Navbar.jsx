import React from 'react';
import { Link } from 'react-router-dom';
import cake2Image from '../assets/images/cake2.png';
import homeImage from '../assets/images/home.png';
import contactImage from '../assets/images/contact.png';

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <img src={homeImage} alt="" />
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <img src={contactImage} alt="" />
                    <Link to="/contacto">Contacto</Link>
                </li>
            </ul>
            <div className="logo">
                <h4>Happy Cake</h4>
                <img className="cake2" src={cake2Image} alt="Cake" />
            </div>
        </nav>
    );
}

export default Navbar;