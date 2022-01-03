import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

export default function CandidateScreen(props) {
    const candidate = data.candidates.find((x) => x._id === props.match.params.id);
    if(!candidate) {
        return <div>Peludito no encontrado.</div>
    }
    return (
        <div>
            <nav className="navigation">
                <ul>
                    <Link to="/Adoption">Regresar a la lista de peludos</Link>
                </ul>
            </nav>
            <div className="row top">
                <div className="col-2">
                    <img className="large" src={candidate.image} alt={candidate.image}></img>    
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{candidate.name}</h1>
                        </li>
                        <li>{candidate.age}</li>
                        <li>{candidate.genre}</li>
                        <li>{candidate.category}</li>
                        <li>Historia:
                            <p>{candidate.description}</p>
                        </li>
                        <li>
                            <h2>{candidate.sponsor}: {candidate.sponsorNumber}</h2>
                        </li>
                    </ul>
                </div>
                <div className="col-1"></div>  
                <ul>
                    <li>Salud: {candidate.health}</li>
                    <li>Esterilizado: {candidate.sterilized}</li>
                </ul>            
            </div>            
        </div>
    )
}
