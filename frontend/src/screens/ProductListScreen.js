import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function ProductListScreen(props) {
    const productList = useSelector(state => state.productList);
    const { loading, error, products } = productList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProducts)
    })
    return (
        <div>
            <h1>Productos</h1>
            { loading? <LoadingBox></LoadingBox>
            :
            error? <MessageBox variant="danger">{ error }</MessageBox>
            :
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Categoria</th>
                        <th>Marca</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product._id}</td>
                            <td>{product._name}</td>
                            <td>{product._price}</td>
                            <td>{product._category}</td>
                            <td>{product._brand}</td>
                            <td>
                                <button type="button" className="small"
                                onClick={() => props.history.push(`/product/${product._id}/edit`)}>
                                    Editar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            }
        </div>
    )
}
