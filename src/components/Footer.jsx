import React from 'react';

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>© {year} Christopher W. Thompson Stone. Todos los derechos reservados.</p>
            <p>
                Visita mi GitHub:{' '}
                <a href="https://github.com/cwts007" target="_blank" rel="noopener noreferrer">
                    cwts007
                </a>
            </p>
        </footer>
    );
}

export default Footer;