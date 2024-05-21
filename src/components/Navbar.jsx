import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <img src="../src/assets/images/home.png" alt="" /><Link to="/">Home</Link>
                </li>
                <li>
                    <img src="./src/assets/images/contact.png" alt="" /><Link to="/contacto">Contacto</Link>
                </li>
            </ul>
            <div className="logo"><h4>Happy Cake</h4>
                <img className="cake2" src="./src/assets/images/cake2.png" alt="Cake" /></div>

        </nav>
    );
}

export default Navbar;