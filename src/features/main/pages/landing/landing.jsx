import React from 'react';
import { Link } from 'react-router-dom';

import './landing.scss';

export default function Landing() {
    return (
        <div className='landing'>
            <img className='background' src="https://mockupfree.net/wp-content/uploads/2023/12/08-10-scaled.jpg" alt="" />

            <div className='content'>
                <div className='textContent'>
                    <p className='description'>Sustainable Drinkware</p>
                    <h1 className='title'><i>Timeless Lifestyle</i></h1>
                </div>

                <Link className='link' to='/shop'> Shop now  </Link>
            </div>
        </div>
    )
}
