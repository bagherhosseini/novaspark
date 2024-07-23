import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuthHook } from '../../hooks';

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const { isSignedIn, isLoaded } = useAuthHook();
  const [authState, setAuthState] = useState({ isSignedIn, isLoaded });

  useEffect(() => {
    setAuthState({ isSignedIn, isLoaded });
  }, [isSignedIn, isLoaded]);

  return (
    <AuthContext.Provider value={authState}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
