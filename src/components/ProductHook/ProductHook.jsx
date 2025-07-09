/* eslint-disable no-case-declarations */
import React, { useReducer } from 'react';
import './ProductHook.css';

const products = [
    {
      emoji: '🍦',
      name: 'ice cream',
      price: 5
    },
    {
      emoji: '🍩',
      name: 'donuts',
      price: 2.5,
    },
    {
      emoji: '🍉',
      name: 'watermelon',
      price: 4
    }
  ];

const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
}

function getTotal(cart) {
    const total = cart.reduce((totalCost, item) => totalCost + item.price, 0);

    return total.toLocaleString(undefined, currencyOptions)
}

function cartReducer(state, action) {
    switch(action.type) {
      case 'add':
        return [...state, action.product];
      case 'remove':
        const productIndex = state.findIndex(item => item.name === action.product.name);
        if(productIndex < 0) {
          return state;
        }
        const update = [...state];
        update.splice(productIndex, 1)
        return update
      default:
        return state;
    }
  }

export default function ProductHook() {
    /*
        The useReducer Hook is similar to useState, but when you initialize the Hook,
        you pass in a function the Hook will run when you change the state along with
        the initial data. The function—referred to as the reducer—takes two arguments: 
        the state and another argument.
        The other argument is what you will supply when you call the update function.
    */
    const [cart, setCart] = useReducer(cartReducer, []);

    function add(product) {
        setCart({ product, type: 'add' });
    }

    function remove(product) {
        setCart({ product, type: 'remove' });
      } 

    return(
        <div className="product-hook-wrapper">
            <div>
                Shopping Cart: {cart.length} total items.
            </div>
            <div>Total: {getTotal(cart)}</div>

            <div>
            {products.map(product => (
                <div key={product.name}>
                    <div className="product-hook">
                        <span role="img" aria-label={product.name}>{product.emoji}</span>
                    </div>
                    <button onClick={() => add(product)}>Add</button>
                    <button onClick={() => remove(product)}>Remove</button>
                </div>
                ))}
            </div>
        </div>
    )
}
