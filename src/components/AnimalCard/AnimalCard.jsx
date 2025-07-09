import React from 'react';
import AnimalDetails from '../AnimalDetails/AnimalDetails';
import './AnimalCard.css';

// export default function AnimalCard(props)
export default function AnimalCard({
  additional,
  name,
  showAdditional,
  size,
  ...props
}) {
  return (
    <div className="animal-wrapper">
      <h2>{name}</h2>
      <h4>{size}kg</h4>
      <AnimalDetails
        {...props}
      />
      <button 
        disabled={!additional}
        onClick={() => showAdditional(additional)}>
          More Info
      </button>
    </div>
  );
}
