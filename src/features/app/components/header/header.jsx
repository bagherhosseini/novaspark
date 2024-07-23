import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import './header.scss';

export default function Header() {
    return (
        <header>
            <Link to='./' className='logo'>NovaSpark</Link>
            <nav>
                <ul>
                    <li>
                        <NavLink className="link" to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to='/about'>Our Story</NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to='/shop'>Shop</NavLink>
                    </li>
                    <li>
                        <NavLink className="link cartBtn" to='/cart'><ShoppingCartIcon /></NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
