import React from 'react';

function Contact() {
    return (
        <div className="container">
            <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
            <form>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required />
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