import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CartScreen from './screens/CartScreen';
import CatalogScreen from './screens/CatalogScreen';
import AdoptionScreen from './screens/AdoptionScreen';
import ProductScreen from './screens/ProductScreen';
import HomScreen from './screens/HomScreen';
import SigninScreen from './screens/SigninScreen';
import { signout } from './actions/userActions';
import RegisterScreen from './screens/RegisterScreen';
import ProductListScreen from './screens/ProductListScreen';
import AdminRoute from './components/AdminRoute';
import ProductEditScreen from './screens/ProductEditScreen';
import CandidateScreen from './screens/CandidateScreen';
import CandidateListScreen from './screens/CandidateListScreen';
import CandidateEditScreen from './screens/CandidateEditScreen';

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
              <Link to="/adoption">Adopta</Link>
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
                      <Link to="/candidatelist">Candidates</Link>
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
          <Route path="/Product/:id" component={ProductScreen} exact></Route>
          <Route path="/Product/:id/edit" component={ProductEditScreen} exact></Route>
          <Route path="/Catalog" component={CatalogScreen} exact></Route>
          <Route path="/Adoption" component={AdoptionScreen} exact></Route>
          <Route path="/Candidate/:id" component={CandidateScreen} exact></Route>
          <Route path="/Candidate/:id/edit" component={CandidateEditScreen} exact></Route>
          <Route path="/" component={HomScreen} exact></Route>
          <Route path="/Signin" component={SigninScreen} exact></Route>
          <Route path="/register" component={RegisterScreen} exact></Route>
          <AdminRoute
            path="/productlist"
            component={ProductListScreen}
          ></AdminRoute>
          <AdminRoute
            path="/candidatelist"
            component={CandidateListScreen}
          ></AdminRoute>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
