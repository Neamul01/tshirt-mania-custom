import React from 'react';
import './Tshirt.css'

const Tshirt = (props) => {
    // console.log(props)
    const { name, price, picture } = props.tshirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>{price}</p>
            <button className='tshirt-btn'>Add to cart</button>
        </div>
    );
};

export default Tshirt;