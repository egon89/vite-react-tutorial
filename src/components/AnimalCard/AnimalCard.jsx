import React from 'react';
import AnimalDetails from '../AnimalDetails/AnimalDetails';
import Card from '../Card/Card';
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
    <Card title="Animal">
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
    </Card>
  );
}
