import React from 'react';
import './SaladSummary.css';

export default function SaladSummary() {
  return(
    <div className="salad-summary-wrapper">
      <h2>Your Salad</h2>
      <ul className="salad-summary-list">
        <li>Apple</li>
        <li>Avocado</li>
        <li>Carrots</li>
      </ul>
    </div>
  )
}
