import React from 'react';
import './SaladMaker.css';
import SaladBuilder from '../SaladBuilder/SaladBuilder';
import SaladSummary from '../SaladSummary/SaladSummary';

export default function SaladMaker() {
  return(
    <>
      <h1 className="salad-maker-wrapper">
        <span role="img" aria-label="salad">🥗 </span>
          Build Your Custom Salad!
          <span role="img" aria-label="salad"> 🥗</span>
      </h1>
      <SaladBuilder />
      <SaladSummary />
    </>
  )
}
