import React from 'react';
import useTshirt from '../../hooks/useTshirt';
import Cart from '../Cart/Cart';
import './Home.css'
import Tshirt from './Tshirt/Tshirt';

const Home = () => {
    const [tshirts, setTshirt] = useTshirt()
    return (
        <div className='home-container'>

            <div className="tshirt-container">
                {
                    tshirts.map(t => <Tshirt
                        key={t._id}
                        tshirt={t}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;