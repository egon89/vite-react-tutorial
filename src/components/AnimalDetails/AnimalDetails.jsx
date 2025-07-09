import React from 'react';
import './AnimalDetails.css';

function convertFood(food) {
  switch(food) {
    case 'insects':
      return '🐜';
    case 'meat':
      return '🍖';
    case 'plants':
    default:
      return '🌱';
  }
}

export default function AnimalDetails({ diet, scientificName }) {
  return(
    <div className="details">
      <h4>Details:</h4>
      <div>
        <b>Scientific Name:</b> {scientificName}.
      </div>
      <div>
        <b>Diet:</b> {diet.map(food => convertFood(food)).join(' ')}
      </div>
    </div>
  )
}
