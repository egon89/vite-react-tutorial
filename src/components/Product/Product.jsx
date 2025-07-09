import React, { Component } from 'react';
import './Product.css';

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

export default class Product extends Component {
    state = {
        cart: [],
        total: 0
    }

    // Receiving a product as an argument
    // Instead of passing an object to setState(), pass a function that takes the state as an argument
    // and returns an object that has the cart updated with the new product and the total updated with the new price
    add = (product) => {
        this.setState(state => ({
          cart: [...state.cart, product.name],
          total: state.total + product.price
        }))
      }

    remove = (product) => {
        this.setState(state => {
            const productIndex = state.cart.indexOf(product.name);
            if (productIndex === -1) {
                return state;
            }

            const cart = [...state.cart]; // avoid mutating the original state
            cart.splice(productIndex, 1);
            
            return ({
                cart,
                total: state.total - product.price
            })
        })
    }

    currencyOptions = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }

    getTotal = () => {
        return this.state.total.toLocaleString(undefined, this.currencyOptions)
    }

    render() {
        return(
        <div className="product-wrapper">
            <div>
            Shopping Cart: {this.state.cart.length} total items.
            </div>
            <div>Total: {this.getTotal()}</div>

            <div>
            {products.map(product => (
                <div key={product.name}>
                <div className="product">
                    <span role="img" aria-label={product.name}>{product.emoji}</span>
                </div>
                <button onClick={() => this.add(product)}>Add</button>
                <button onClick={() => this.remove(product)}>Remove</button>
                </div>
            ))}
            </div>
        </div>
        )
    }
}
