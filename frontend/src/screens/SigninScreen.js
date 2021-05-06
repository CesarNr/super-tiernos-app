import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function SinginScreen(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

    const userSignin = useSelector ((state) => state.userSignin);
    const { userInfo, loading, error } = userSignin;

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password))
    };
    useEffect(() => {
         if (userInfo) {
             props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);
    return (
        <div className="home">
            <div className="home-title">
                <form className="form" onSubmit={submitHandler}>
                    <div>
                        <h1>Iniciar Sesión</h1>
                    </div>
                    {loading && <LoadingBox></LoadingBox>}
                    {error && <MessageBox variant="danger">{error}</MessageBox>}
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