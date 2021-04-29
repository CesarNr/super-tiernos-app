import React from 'react';
import { Link } from 'react-router-dom';

export default function SinginScreen(props) {

    return (
        <div>
            <div className="card card-body">
                <form className="form">
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
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Ingresa tu contraseña"
                            required
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