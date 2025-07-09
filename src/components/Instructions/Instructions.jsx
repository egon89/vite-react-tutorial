import React from 'react';
import emoji from './assets/emoji.svg';
import './Instructions.css'

export default function Instructions() {
  return(
    <div className="instructions">
        <img alt="laughing crying emoji" src={emoji} />
        <p>Click on an emoji to view the emoji short name.</p>
    </div>
  )
}

/*
const Instructions = () => (
  <div className="instructions">
    ...
  </div>
)

export default Instructions;
*/
