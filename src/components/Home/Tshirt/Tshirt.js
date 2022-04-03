import React from 'react';
import './Tshirt.css'

const Tshirt = ({ tshirt, handleAddToCart }) => {
    // console.log(props)
    const { name, price, picture, _id } = tshirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>{price}</p>
            <button onClick={() => handleAddToCart(tshirt)} className='tshirt-btn'>Add to cart</button>
        </div>
    );
};

export default Tshirt;