import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
    //conditional rendering
    //1.element variable
    //2.ternary operation
    //3.&& opetator(shothand)
    //4.|| operator(shorthand)

    //1.
    let command;
    if (cart.length === 0) {
        command = <div>
            <b>Add At lease One Item</b>
        </div>
    }
    else {
        command = <p>Thanks for Adding</p>
    }
    return (
        <div>
            {/* 3. */}
            {cart.length === 3 && <p>You have added Threee Items</p>}

            {/* 4. */}
            {cart.length === 0 || <p>YAY!! you are adding!!!!</p>}

            <h2>Item Selected: {cart.length}</h2>
            {
                cart.map(tshirt => <p>
                    {tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt)}>X</button>
                </p>)
            }
            {command}
            {/* 2 */}
            {cart.length !== 4 ? <p>Keep Adding</p> : <button>Remove All</button>}
        </div>
    );
};

export default Cart;