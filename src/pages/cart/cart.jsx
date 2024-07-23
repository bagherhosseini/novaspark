import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { toast } from 'react-hot-toast';

import './cart.scss';
import { useCartStore } from "../../store/store";

export default function Cart() {
    const cart = useCartStore((state) => state.cart);
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const changeQuantity = useCartStore((state) => state.changeQuantity);

    const handleQuantity = (event, id, quantity) => {
        if (event.target.value > 99) event.target.value = 99;
        if (event.target.value < 0) event.target.value = 0;
        changeQuantity(id, Number(event.target.value));
    }

    const handleIncrement = (id, quantity) => {
        if (99 - quantity === 0) return toast.error('You have reached the maximum quantity for this product');
        changeQuantity(id, Number(quantity + 1));
    }

    const handleDecrement = (id, quantity) => {
        if (quantity === 0) return toast.error('You have reached the mininum quantity for this product');
        changeQuantity(id, Number(quantity - 1));
    }

    const handleCheckout = () => {
        const itemWithoutQuantity = cart.find(item => item.quantity === 0);
        if (itemWithoutQuantity) {
            return toast.error(`You can't add 0 quantity of a product`);
        }

        return toast.error(`We can't accept orders right now`)
    }

    return (
        <div className='cart'>
            {cart.length > 0 ?
                (
                    <div className='background'>
                        <div className='cartProduct'>
                            <h2>My cart</h2>
                            <div className='products'>
                                {cart.map((item) => (
                                    <div key={item.id} className='product'>
                                        <img src={item.images[0]} alt="" />
                                        <div className='productInfo'>
                                            <h4>{item.name}</h4>
                                            <div className='quantity-price'>
                                                {/* <p>{item.quantity}</p> */}
                                                <div className='quantityInput'>
                                                    <button className='decrementBtn btn' onClick={() => handleDecrement(item.id, item.quantity)}>
                                                        <RemoveIcon fontSize="small" />
                                                    </button>
                                                    <input value={item.quantity} onChange={(event) => handleQuantity(event, item.id, item.quantity)} type="number" />
                                                    <button className='incrementBtn btn' onClick={() => handleIncrement(item.id, item.quantity)}>
                                                        <AddIcon fontSize="small" />
                                                    </button>
                                                </div>
                                                <p>$ {item.price}</p>
                                            </div>
                                            <button onClick={() => removeFromCart(item.id)}><DeleteOutlineIcon /></button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='productPrice'>
                            <h3>Order summary</h3>

                            <div className='price'>
                                <div>
                                    <h4>Subtotal</h4>
                                    <p>
                                        $ {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
                                    </p>
                                </div>

                                <button onClick={handleCheckout} >Checkout</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='background'>
                        <h2>Your cart is empty</h2>
                    </div>
                )
            }
        </div>
    )
}
