import React from 'react';

import './footer.scss';

export default function Footer() {
    return (
        <footer>
            <div className='content'>
                <div className='menu section'>
                    <h2>Menu</h2>
                    <ul>
                        <li>
                            <a href='/'>Home</a>
                        </li>
                        <li>
                            <a href='/about'>Our Story</a>
                        </li>
                        <li>
                            <a href='/shop'>Shop</a>
                        </li>
                    </ul>
                </div>

                <div className='legal section'>
                    <h2>Legal</h2>
                    <ul>
                        <li>
                            <a href='/'>Privacy Policy</a>
                        </li>
                        <li>
                            <a href='/'>Terms of Service</a>
                        </li>
                        <li>
                            <a href='/'>Refund Policy</a>
                        </li>
                    </ul>
                </div>

                <div className='contact section'>
                    <h2>Contact Us</h2>
                    <div className='info'>
                        <p>123-456-7890</p>
                        <p>Info@mysite.com</p>
                        <div className='social'>
                            <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
                                <i className="fab fa-facebook"></i>
                                Facebook
                            </a>
                            <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
                                <i className="fab fa-instagram"></i>
                                Instagram
                            </a>
                            <a href='https://www.twitter.com/' target='_blank' rel='noreferrer'>
                                <i className="fab fa-twitter"></i>
                                Twitter
                            </a>
                        </div>
                    </div>
                </div>

                <div className='newsLetter section'>
                    <h2>Subscribe to our newsletter</h2>
                    <form>
                        <label htmlFor="email">Email *</label>
                        <input id='email' type='email' placeholder='Enter your email address' />
                        <button>Subscribe</button>
                    </form>
                </div>
            </div>

            <hr />

            <div className='logo'>
                NovaSpark
            </div>
        </footer>
    )
}
