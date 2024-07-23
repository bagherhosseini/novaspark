import React from 'react';
import { Link } from 'react-router-dom';

import './featured.scss';

import { products } from '../../../../services';

export default function Featured() {
    return (
        <div className='featured'>
            <div className='mission'>
                <h2>Our Mission - Your Impact</h2>
                <p>Our mission is to provide a platform for developers to showcase their projects, connect with other developers, and learn from each other.</p>
                <a href="">Read more</a>
            </div>

            <div className='productsContent'>
                <h2>Shop By Category</h2>
                <div className='background'>

                </div>
                <div className='products'>
                    {
                        products.slice(0, 4).map(product => (
                            <a href={`./shop/product/${product.id}`} className='product' key={product.id}>
                                <img loading='lazy' src={product.images[0]} alt={product.name} />
                                <div className='productContent'>
                                    <h3>{product.name}</h3>
                                    <a href={`./shop/product/${product.id}`}>Shop now</a>
                                </div>
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
