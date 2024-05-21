import React from 'react';
import cakeImage from '../assets/images/cake.png';

function Home() {
    return (
        <div className="container">
            <div className="titulo">
                <h1 className="titulo1">Bienvenido a </h1>
                <h1 className="negrita">Happy Cake</h1>
            </div>
            <h3>El lugar de los pasteles felices</h3>
            <img src={cakeImage} alt="Pastel" />
        </div>
    );
}

export default Home;
