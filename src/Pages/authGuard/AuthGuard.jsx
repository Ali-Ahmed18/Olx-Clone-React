import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AuthGuard({ children }) {
    const token = localStorage.getItem('authToken');
    const user = JSON.parse(localStorage.getItem('authUser'));
    const navigate = useNavigate();
    const isAuthenticated = token && user;

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    return(
        !isAuthenticated ? <>{children}</> : null)
}

export default AuthGuard;
