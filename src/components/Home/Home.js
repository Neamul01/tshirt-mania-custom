import React, { useState } from 'react';
import useTshirt from '../../hooks/useTshirt';
import Cart from '../Cart/Cart';
import './Home.css'
import Tshirt from './Tshirt/Tshirt';

const Home = () => {
    const [tshirts, setTshirt] = useTshirt()
    const [cart, setCart] = useState([]);

    const handleAddToCart = (selectedItem) => {
        const exists = cart.find(tshirt => tshirt._id === selectedItem._id);
        if (!exists) {
            const newCart = [...cart, selectedItem];
            setCart(newCart)
        }
        else {
            alert('This item already addeded')
        }
    }

    const handleRemoveFromCart = selectedItem => {
        const rest = cart.filter(tshirt => tshirt._id !== selectedItem._id);
        setCart(rest)
    }
    return (
        <div className='home-container'>

            <div className="tshirt-container">
                {
                    tshirts.map(t => <Tshirt
                        key={t._id}
                        tshirt={t}
                        handleAddToCart={handleAddToCart}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    key={cart._id}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;