import React, { useState } from 'react';
import useTshirt from '../../hooks/useTshirt';
import Cart from '../Cart/Cart';
import './Home.css'
import Tshirt from './Tshirt/Tshirt';

const Home = () => {
    const [tshirts, setTshirt] = useTshirt()
    const [cart, setCart] = useState([]);

    const cartContainer = [];
    const handleAddToCart = (selectedItem) => {
        cartContainer.push(selectedItem)
        setCart(cartContainer)
    }
    console.log(cart)
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
                ></Cart>
            </div>
        </div>
    );
};

export default Home;