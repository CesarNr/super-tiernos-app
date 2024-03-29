import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { candidateCreateReducer, candidateDeleteReducer, candidateDetailsReducer, candidateListReducer, candidateUpdateReducer } from './reducers/candidateReducers';
import { cartReducer } from './reducers/cartReducers';
import {
  productCreateReducer,
  productDeleteReducer,
  productDetailsReducer,
  productListReducer,
  productUpdateReducer
} from './reducers/productReducers';
import {
  userRegisterReducer,
  userSigninReducer
} from './reducers/userReducers';

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
  },
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
  },
};
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productDelete: productDeleteReducer,
  candidateList: candidateListReducer,
  candidateDetails: candidateDetailsReducer,
  candidateCreate: candidateCreateReducer,
  candidateUpdate: candidateUpdateReducer,
  candidateDelete: candidateDeleteReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;