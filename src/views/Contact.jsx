import React from 'react';

function Contact() {
    return (
        <div className="container">
            <h1>Cuéntanos, ¿en qué te podemos ayudar?</h1>
            <form>
                <label htmlFor="email">Correo:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="description">Descripción:</label>
                <textarea id="description" name="description" required></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Contact;