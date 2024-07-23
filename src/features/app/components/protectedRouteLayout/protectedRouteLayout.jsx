import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import './protectedRouteLayout.scss';
import { useAuth } from '../../../../contexts';

export default function ProtectedRouteLayout() {
    const navigate = useNavigate();
    const { isSignedIn, isLoaded } = useAuth();

    useEffect(() => {
        if (isLoaded && !isSignedIn) {
            navigate(process.env.REACT_APP_SIGN_IN_URL)
        }
    }, [isLoaded, isSignedIn, navigate]);

    if (!isLoaded || (isLoaded && !isSignedIn)) {
        return (
            <section className='protectedRouteLayout'>
                <div className="">Loading...</div>
            </section>
        )
    }

    return (
        <section className="protectedRouteLayout" >
            <Outlet />
        </section >
    )
};