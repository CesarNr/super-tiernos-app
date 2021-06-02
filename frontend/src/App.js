import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CartScreen from './screens/CartScreen';
import CatalogScreen from './screens/CatalogScreen';
import ProductScreen from './screens/ProductScreen';
import HomScreen from './screens/HomScreen';
import SigninScreen from './screens/SigninScreen';
import { signout } from './actions/userActions';
import RegisterScreen from './screens/RegisterScreen';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div className="brand-logo">
            <Link to="/">
              <img
                src="images/logoSuperTiernos.png"
                alt="logo"
                className="img-brand"
              ></img>
            </Link>
            <Link className="brand" to="/">
              Súper Tiernos
            </Link>
          </div>
          <span className="menu-icon"><i className="fas fa-ellipsis-v"></i></span>
          <nav className="navigation">
            <ul>
              <Link to="/catalog">Tienda</Link>
              <Link to="/cart">
                Carrito
                  {cartItems.length > 0 && (
                  <span className="badge">{cartItems.length}</span>
                )}
              </Link>
              {userInfo ? (
                <div className="dropdown">
                  <Link to="#">
                    {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                  </Link>
                  <ul className="dropdown-content">
                    <Link to="#signout" onClick={signoutHandler}>
                      Cerrar Sesión
                    </Link>
                  </ul>
                </div>
              ) : (
                <Link to="/Signin">Iniciar Sesion</Link>
              )}
              {userInfo && userInfo.isAdmin && (
                <div className="dropdown">
                  <Link to="#admin">
                    Admin {' '}<i className="fa fa-caret-down"></i>
                  </Link>
                  <ul className="dropdown-content">
                    <il>
                      <Link to="/dashboard">Dashboard</Link>
                    </il>
                    <il>
                      <Link to="/productlist">Products</Link>
                    </il>
                    <il>
                      <Link to="/orderlist">Orders</Link>
                    </il>
                    <il>
                      <Link to="/userlist">Users</Link>
                    </il>
                  </ul>
                </div>
              )}
            </ul>
          </nav>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/Product/:id" component={ProductScreen}></Route>
          <Route path="/Catalog" component={CatalogScreen} exact></Route>
          <Route path="/" component={HomScreen} exact></Route>
          <Route path="/Signin" component={SigninScreen} exact></Route>
          <Route path="/register" component={RegisterScreen} exact></Route>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
