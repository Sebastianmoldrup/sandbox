'use client';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, removeProduct } from '../utils/redux/features/cart/cartSlice';

// state
import { useSelector } from 'react-redux';

const sneakers =  [
    {
        id: '1',
        name: 'Nike Air Max 90',
        price: 150
    },
    {
        id: '2',
        name: 'Adidas Yeezy Boost 350',
        price: 200
    }
];

export default function Redux({ product }: { product: any }) {
    const dispatch = useDispatch();

    // // Add to cart
    // const handleAddToCart = (product: any) => {
    //     dispatch(addProduct(product));
    // };

    // // Remove from cart
    // const handleRemoveFromCart = (product: any) => {
    //     dispatch(removeProduct(product));
    // };

    // log state
    const cart = useSelector((state: any) => state.cart.products);
    console.log(cart);

    return (
        <div className="grid place-content-center gap-y-10 h-screen bg-primary text-white">
            {sneakers.map((sneaker, index) => {
                return (
                    <div key={index}>
                        <div>{sneaker.id}</div>
                        <div>{sneaker.name}</div>
                        <div>{sneaker.price}</div>
                        <div className="flex flex-col gap-y-2">
                            <button className="bg-white text-black px-4 py-2 rounded-md w-[250px] hover:cursor-pointer" onClick={() => dispatch(addProduct(sneaker))}>Add to cart</button>
                            <button className="bg-white text-black px-4 py-2 rounded-md w-[250px] hover:cursor-pointer" onClick={() => dispatch(removeProduct(sneaker.id))}>Remove from cart</button>
                        </div>
                    </div>
                );      
            })}
        </div>
    );
};
