import React from 'react';
import Instructions from '../Instructions/Instructions';
import AnimalCard from '../AnimalCard/AnimalCard';
import './App.css'
import data from './data';
import Product from '../Product/Product';
import ProductHook from '../ProductHook/ProductHook';

const displayEmojiName = event => alert(event.target.id);
const emojis = [
  {
    emoji: '😀',
    name: "test grinning face"
  },
  {
    emoji: '🎉',
    name: "party popper"
  },
  {
    emoji: '💃',
    name: "woman dancing"
  }
];

function showAdditional(additional) {
  const alertInformation = Object.entries(additional)
    .map(information => `${information[0]}: ${information[1]}`)
    .join('\n');
  alert(alertInformation)
};

function App() {
  const greeting = "greeting";
  const displayAction = false;

  return (
    <>
      <div className="container">
        <h1 id={greeting}>Hello, World</h1>
        {displayAction && <p>I am writing JSX</p>}
        <Instructions />
        <ul>
        {
          emojis.map(emoji => (
            <li key={emoji.name}>
              <button
                onClick={displayEmojiName}
              >
                <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
              </button>
            </li>
          ))
        }
        </ul>
      </div>

      <hr />

      <div className="wrapper">
        {
          data.map(animal => (
            <AnimalCard 
              key={animal.name}
              additional={animal.additional}
              diet={animal.diet}
              name={animal.name}
              scientificName={animal.scientificName}
              showAdditional={showAdditional}
              size={animal.size}  
            />
          ))
        }
      </div>

      <hr />

      <Product />

      <hr />

      <ProductHook />
    </>
  );
}

export default App
