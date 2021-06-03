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
    }, [dispatch])
    const deleteHandler = () => {
        /// TODO: dispatch delete action
    };
    return (
        <div>
            <h1>Productos</h1>
            { loading? <LoadingBox></LoadingBox>
            :
            error? <MessageBox variant="danger">{ error }</MessageBox>
            :
            <table className="table">
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
                        <tr key={product._id}>
                            <td>{product._id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                            <td>{product.brand}</td>
                            <td>
                                <button 
                                    type="button" 
                                    className="small"
                                    onClick={() => 
                                        props.history.push(`/product/${product._id}/edit`)
                                    }
                                >
                                    Editar
                                </button>
                                <button 
                                    type="button" 
                                    className="small"
                                    onClick={() => 
                                        deleteHandler(product)
                                    }
                                >
                                    Eliminar
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
