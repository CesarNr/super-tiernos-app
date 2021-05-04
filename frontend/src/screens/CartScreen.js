import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { Link } from 'react-router-dom';
import MessageBox from '../components/MessageBox';

export default function CartScreen(props) {
    const productId = props.match.params.id;
    const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();
    useEffect(() =>{
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);
    
    const removeFromCartHandler = (id) => {
        // delete action
        dispatch(removeFromCart(id));
    };

    const checkoutHandler = () => {
        props.history.push('/signin?redirect=shipping');
    }
    return (
        <div className="row top">
            <div className="col-2">
                <h1>Carrito de compras</h1>
                {cartItems.length === 0
                ? <MessageBox>
                    Carrito vacio. <Link to="/Catalog">Ir a comprar</Link>
                </MessageBox>
                :
                (
                    <ul>
                        {
                            cartItems.map((item) => (
                                <li key={item.product}>
                                    <div className="row">
                                        <div>
                                            <img
                                            src={item.image}
                                            alt={item.name}
                                            className="small"
                                            ></img>
                                        </div>
                                        <div>
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </div>
                                        <div>
                                            <select
                                                value={item.qty}
                                                onChange={(e) =>
                                                    dispatch(
                                                        addToCart(item.product,
                                                        Number(e.target.value))
                                                    )
                                                }
                                            >
                                                {[...Array(item.countInStock).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                    ))}
                                            </select>
                                        </div>
                                        <div>${item.price}</div>
                                        <div>
                                            <button
                                                type="button"
                                                onClick={() => removeFromCartHandler(item.product)}
                                            >
                                                Borrar
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                    </ul>
                )}
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <h2>
                                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
                                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                            </h2>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={checkoutHandler}
                                className="primary block"
                                disabled={cartItems.length === 0}
                            >
                                Continuar al checkout
                            </button>
                        </li>
                        <li>
                            <h3>
                                Las compras online se encuentran temporalmente inhabilitadas, por favor toma una captura de pantalla y enviala al 312-312-1485
                            </h3>
                        </li>
                    </ul>
                </div>
                <div className="redes-container">
                <ul>
                    <li><a href="https://www.facebook.com/supertiernosoficial-224234252253413" target="_blank" rel="noopener noreferrer" className="facebook"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://www.instagram.com/supertiernosoficial/" target="_blank" rel="noopener noreferrer" className="instagram"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="https://api.whatsapp.com/message/25XF36FMVFSGB1" target="_blank" rel="noopener noreferrer" className="whatsapp"><i className="fab fa-whatsapp"></i></a></li>
                </ul>

            </div>
            </div>
        </div>
    );
}