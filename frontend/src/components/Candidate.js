import React from 'react';
import {Link} from 'react-router-dom';

export default function Candidate(props) {
  const { candidate } = props;
  return (
    <div key={candidate._id} className="card">
    <Link to={`/candidate/${candidate._id}`}>
        <img className="medium" src={candidate.image} alt={candidate.name} />
    </Link>
    <div className="card-body">
        <Link to={`/candidate/${candidate._id}`}>
            <h2>{candidate.name}</h2>
        </Link>
        <div className="price">{candidate.genre}</div>
        <div className="price">{candidate.age}</div>
    </div>
</div>
  );
}