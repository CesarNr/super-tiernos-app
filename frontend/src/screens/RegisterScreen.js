import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function RegisterScreen(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [number, setNumber] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

    const userRegister = useSelector ((state) => state.userRegister);
    const { userInfo, loading, error } = userRegister;

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            alert('Las contraseñas digitadas son diferentes.')
        } else {
            dispatch(register(name, email, number, password))
        }
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
                        <h1>Crear una cuenta</h1>
                    </div>
                    {loading && <LoadingBox></LoadingBox>}
                    {error && <MessageBox variant="danger">{error}</MessageBox>}
                    <div>
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Ingresa tu nombre"
                            required
                            onChange={(e) => setName(e.target.value)}
                        ></input>
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
                        <label htmlFor="number">Número de contacto</label>
                        <input
                            type="text"
                            id="number"
                            placeholder="Ingresa tu número celular"
                            required
                            onChange={(e) => setNumber(e.target.value)}
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
                    <div>
                        <label htmlFor="confirmPassword">Confirme su contraseña</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Ingresa nuevamente contraseña"
                            required
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        ></input>
                    </div>
                    <label />
                    <button className="primary" type="submit">
                        Registrarse
                    </button>
                </form>
            </div>
            <div>
                <label />
                <div>
                    ¿Ya tienes una cuenta? {' '}
                    <Link to={`/signin?redirect=${redirect}`}>Iniciar sesión</Link>
                </div>
            </div>
        </div>
    )
};