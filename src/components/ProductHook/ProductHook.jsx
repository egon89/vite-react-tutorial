import React, { useState } from 'react';
import './ProductHook.css';

const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
}

function getTotal(total) {
    return total.toLocaleString(undefined, currencyOptions)
}

export default function ProductHook() {
    // > stateful data
    // useState is a function that takes the initial state as an argument and returns an array with two items.
    // The first item is the current state, and the second item is a function that updates the state.
    // By passing an empty array as an argument to useState, you set the initial empty state as the first value of cart.
    const [cart, setCart] = useState([]);
    // The second useState is for the total, which is initialized to 0.
    const [total, setTotal] = useState(0);

    function add() {
        setCart(['ice cream']);
        setTotal(5);
    }

    return(
        <div className="product-hook-wrapper">
            <div>
                Shopping Cart: {cart.length} total items.
            </div>
            <div>Total: {getTotal(total)}</div>

            <div className="product-hook"><span role="img" aria-label="ice cream">🍦</span></div>
            <button onClick={add}>Add</button>
            <button
                onClick={() => {
                setCart([]);
                setTotal(0);
                }}
            >
                Remove
            </button>
        </div>
    )
}
