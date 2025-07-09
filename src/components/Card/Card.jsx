import React from 'react';
import './Card.css';

export default function Card({ children, details, title }) {
    return(
      <div className="card">
        <div className="card-details">
          <h2>{title}</h2>
          {details}
        </div>
        {children}
      </div>
    )
  }
