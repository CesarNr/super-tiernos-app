import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCandidate, deleteCandidate, listCandidates } from '../actions/candidateActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { CANDIDATE_CREATE_RESET, CANDIDATE_DELETE_RESET } from '../constants/candidateConstants';

export default function CandidateListScreen(props) {
    const candidateList = useSelector(state => state.candidateList);
    const { loading, error, candidates } = candidateList;

    const candidateCreate = useSelector(state => state.candidateCreate);
    const { 
        loading: loadingCreate,
        error: errorCreate,
        success: successCreate,
        candidate: createdCandidate,
    } = candidateCreate;
    const dispatch = useDispatch();

    const candidateDelete = useSelector((state) => state.candidateDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = candidateDelete;

    useEffect(() => {
        if(successCreate) {
            dispatch({type: CANDIDATE_CREATE_RESET});
            props.history.push(`/candidate/${createdCandidate._id}/edit`);
        }
        if(successDelete){
            dispatch({type: CANDIDATE_DELETE_RESET}); 
        }
        dispatch(listCandidates());
    }, [createdCandidate, dispatch, props.history, successCreate, successDelete]);

    const deleteHandler = (candidate) => {
        if (window.confirm('Are you sure you want to delete?')) {
            dispatch(deleteCandidate(candidate._id));
        }
        
    };

    const createHandler = () => {
        dispatch(createCandidate());
    }

    return (
        <div>
            <div className="row">
                <h1>Candidatos en adopcion</h1>
                <button type="button" className="primary" onClick={createHandler}>
                    Crear candidato
                </button>
            </div>
            {loadingDelete && <LoadingBox></LoadingBox>}
            {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}

            {loadingCreate && <LoadingBox></LoadingBox>}
            {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
            { loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{ error }</MessageBox>
                ) : (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Edad</th>
                                    <th>Categoria</th>
                                    <th>Genero</th>
                                    <th>Esterilizado</th>
                                    <th>Salud</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {candidates.slice(0).reverse().map((candidate) => (
                                    <tr key={candidate._id}>
                                        <td>{candidate._id}</td>
                                        <td>{candidate.name}</td>
                                        <td>{candidate.age}</td>
                                        <td>{candidate.category}</td>
                                        <td>{candidate.genre}</td>
                                        <td>{candidate.sterilized}</td>
                                        <td>{candidate.health}</td>
                                        <td>
                                            <button 
                                                type="button" 
                                                className="small"
                                                onClick={() => 
                                                    props.history.push(`/candidate/${candidate._id}/edit`)
                                                }
                                            >
                                                Editar
                                            </button>
                                            <button 
                                                type="button" 
                                                className="small"
                                                onClick={() => 
                                                    deleteHandler(candidate)
                                                }
                                            >
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )
            }
        </div>
    )
}
