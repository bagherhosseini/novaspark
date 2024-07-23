import { useState, useLayoutEffect } from 'react';
import Cookies from 'js-cookie';

export function useAuthHook() {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useLayoutEffect(() => {
        setTimeout(() => {
            const token = Cookies.get("token");
            if (token) {
                setIsSignedIn(true);
            }
            setIsSignedIn(false);
            // setIsSignedIn(true);
            setIsLoaded(true);
        }, 1000);
    }, []);

    return {
        isSignedIn,
        isLoaded,
    };
}
