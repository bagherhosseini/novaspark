import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import './unProtectedRouteLayout.scss';
import { useAuth } from '../../../../contexts';
import * as features from '../../../';

export default function UnProtectedRouteLayout() {
    const navigate = useNavigate();
    const { isSignedIn, isLoaded } = useAuth();

    useEffect(() => {
        if (isLoaded && isSignedIn && (window.location.pathname.toLowerCase() === process.env.REACT_APP_SIGN_IN_URL?.toLowerCase() || window.location.pathname.toLowerCase() === process.env.REACT_APP_SIGN_UP_URL?.toLowerCase())) {
            navigate(process.env.REACT_APP_AFTER_SIGN_IN_URL.toLowerCase())
        }
    }, [isLoaded, isSignedIn, navigate]);

    if (!isLoaded || (isLoaded && isSignedIn &&
        (window.location.pathname.toLowerCase() === process.env.REACT_APP_SIGN_IN_URL?.toLowerCase() ||
            window.location.pathname.toLowerCase() === process.env.REACT_APP_SIGN_UP_URL?.toLowerCase()))) {
        return (
            <section className='unProtectedRouteLayout'>
                <div className="loading">
                    <p>Loading...</p>
                </div>
            </section>
        )
    }

    return (
        <section className='unProtectedRouteLayout'>
            <features.Header />
            <Outlet />
            <features.Footer />
        </section>
    )
}