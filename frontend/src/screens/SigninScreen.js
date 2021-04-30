import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SinginScreen(props) {

    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        // TODO: sigin action
    }
    return (
        <div className="home">
            <div className="home-title">
                <form className="form" onSubmit={submitHandler}>
                    <div>
                        <h1>Iniciar Sesión</h1>
                    </div>
                    <div>
                        <label htmlFor="email">Correo electronico</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Ingresa tu correo"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Ingresa tu contraseña"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        ></input>
                    </div>
                    <label />
                    <button className="primary" type="submit">
                        Iniciar Sesión
                    </button>
                </form>
            </div>
            <div>
                <label />
                <div>
                    ¿Eres nuevo? {' '}
                    <Link to="/register">Crear una cuenta</Link>
                </div>
            </div>
        </div>
    )
};