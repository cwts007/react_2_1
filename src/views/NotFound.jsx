import React from 'react';
import image404 from '../assets/images/404.png'

function NotFound() {
    return (
        <div className="container_not_found">
            <h1>Página no encontrada</h1>
            <p>Lo sentimos, la página que buscas no existe.</p>
            <img src={image404} alt="404" title='error pagina no encontrada' />
        </div>
    );
}

export default NotFound;