import React, { useContext } from 'react';
import UserContext from '../User/User';
import './SaladItem.css';

export default function SaladItem({ image, name }) {
  const { favorites } = useContext(UserContext);
  const favorite = favorites.includes(name);

  return(
    <div className="salad-item-wrapper">
        <h3>
          {name}
        </h3>
        <span className="salad-item-favorite" aria-label={favorite ? 'Favorite' : 'Not Favorite'}>
          {favorite ? '😋' : ''}
        </span>
        <button className="salad-item-add">
          <span className="salad-item-image" role="img" aria-label={name}>{image}</span>
        </button>
    </div>
  )
}
