import React from 'react';

const Cart = ({ cart }) => {
    console.log(cart)
    return (
        <div>
            <h2>{cart.name}</h2>
        </div>
    );
};

export default Cart;