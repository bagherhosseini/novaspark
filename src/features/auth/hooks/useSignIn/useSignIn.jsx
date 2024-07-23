import { useState, useCallback } from 'react';
import toast from 'react-hot-toast';

import { signInSchema } from '../../../../schemas';
import { apiServiceAuth } from '../../../../services';

export function useSignIn() {
    const [user, setUser] = useState({ email: '', password: '' });
    const [isDisabled, setIsDisabled] = useState(true);
    const [isValid, setIsValid] = useState({ email: true, password: true });

    const handleChange = useCallback((event) => {
        const { name, value } = event.target;
        setUser((prev) => {
            const newState = { ...prev, [name]: value };

            const validate = signInSchema.validate(newState, { abortEarly: false });
            const { error } = validate;

            if (!error) {
                setIsValid((prev) => ({
                    ...prev,
                    [event.target.name]: true,
                }));
            } else {
                const fieldError = error.details.find(detail => detail.context?.key === event.target.name);
                if (fieldError) {
                    setIsValid((prev) => ({
                        ...prev,
                        [event.target.name]: false,
                    }));
                } else {
                    setIsValid((prev) => ({
                        ...prev,
                        [event.target.name]: true,
                    }));
                }
            }

            setIsDisabled(!(newState.email && newState.password));
            return newState;
        });
    }, []);

    const handleSignIn = useCallback((event) => {
        event.preventDefault();
        const result = signInSchema.validate(user);
        const { error } = result;
        if (!error) {
            apiServiceAuth.signIn(user.email, user.password)
        } else {
            toast.error(
                (t) => (
                    <span
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%',
                            gap: '13px',
                        }}
                    >
                        {error.message}
                    </span>
                ),
                {
                    style: {
                        borderRadius: '10px',
                        background: '#262626',
                        color: '#fff',
                    },
                    duration: 5000,
                }
            );
        }
    }, [user]);

    return {
        user,
        isDisabled,
        isValid,
        handleChange, 
        handleSignIn,
    };
};
