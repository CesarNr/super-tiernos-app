import React, { useEffect } from 'react';
import Candidate from '../components/Candidate';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listCandidates } from '../actions/candidateActions';

export default function AdoptionScreen() {
    const dispatch = useDispatch();
    const candidateList = useSelector( (state) => state.candidateList);
    const { loading, error, candidates } = candidateList;

    useEffect(() => {
        dispatch(listCandidates());
    }, [dispatch]);
    return (
        <div className="home">
            <div>
                <h1>
                    ¿Quieres Adoptar?
                </h1>
                <h2>
                    Pronto encontraras acá la lista de peluditos.
                </h2>

                <div>
                    {loading ? (
                        <LoadingBox></LoadingBox>
                    ) : error ? (
                        <MessageBox variant="danger">{error}</MessageBox>
                    ) : (
                        <div className="row center">
                        {candidates.map((candidate) => (
                            <Candidate key={candidate._id} candidate={candidate}></Candidate>
                        ))}
                        </div>
                    )}
                </div>

            </div>
            
        </div>
    );
}
