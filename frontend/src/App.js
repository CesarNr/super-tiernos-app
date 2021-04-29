import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartScreen from './screens/CartScreen';
import CatalogScreen from './screens/CatalogScreen';
import ProductScreen from './screens/ProductScreen';
import HomScreen from './screens/HomScreen';
import SigninScreen from './screens/SigninScreen';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div className="brand-logo">
            <Link to="/">
              <img
                src="/images/picture1.png"
                alt="logo"
                className="img-brand"
              ></img>
            </Link>
            <Link className="brand" to="/">
              Súper Tiernos
            </Link>
          </div>
          <span className="menu-icon">Ver menú</span>
          <nav className="navigation">
            <ul>
              <Link to="/catalog">Tienda</Link>
              <Link to="/cart">
                Carrito
                  {cartItems.length > 0 && (
                  <span className="badge">{cartItems.length}</span>
                )}
              </Link>
              <Link to="/Signin">Iniciar Sesion</Link>
            </ul>
          </nav>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/Product/:id" component={ProductScreen}></Route>
          <Route path="/Catalog" component={CatalogScreen} exact></Route>
          <Route path="/" component={HomScreen} exact></Route>
          <Route path="/Signin" component={SigninScreen} exact></Route>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
