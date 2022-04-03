import React from 'react';
import useTshirt from '../../hooks/useTshirt';
import Cart from '../Cart/Cart';

const Home = () => {
    const [tshirt, setTshirt] = useTshirt()
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                <h2>{tshirt.length}</h2>
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;