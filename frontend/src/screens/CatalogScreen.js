import React, { useEffect } from 'react';
import Product from '../components/Product';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

export default function CatalogScreen() {
    const dispatch = useDispatch();
    const productList = useSelector( (state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);
    return (
        <div className="home">
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                 <MessageBox variant="danger">{error}</MessageBox>
             ) : (
                <div className="row center">
                    {products.sort((product, a, b) => ( (a.createdAt > b.createdAt) ?
                        <Product key={product._id} product={product}></Product> : -1
                    ))}
                </div>
             )}
        </div>
    );
}
