import React from 'react';
import SaladItem from '../SaladItem/SaladItem';
import './SaladBuilder.css';

const ingredients = [
  {
    image: '🍎',
    name: 'apple',
  },
  {
    image: '🥑',
    name: 'avocado',
  },
  {
    image: '🥦',
    name: 'broccoli',
  },
  {
    image: '🥕',
    name: 'carrot',
  },
  {
    image: '🍷',
    name: 'red wine dressing',
  },
  {
    image: '🍚',
    name: 'seasoned rice',
  },
];

export default function SaladBuilder() {
  return(
    <div className="salad-builder-wrapper">
      {
        ingredients.map(ingredient => (
          <SaladItem
            key={ingredient.name}
            image={ingredient.image}
            name={ingredient.name}
          />
        ))
      }
    </div>
  )
}
