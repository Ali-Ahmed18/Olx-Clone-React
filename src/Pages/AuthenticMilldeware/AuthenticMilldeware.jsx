import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AuthenticMilldeware({ children }) {
    const token = localStorage.getItem('authToken');
    const user = JSON.parse(localStorage.getItem('authUser'));
    const navigate = useNavigate();
    const isAuthenticated = token && user;

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);

    return(
        isAuthenticated ? <>{children}</> : null)
}

export default AuthenticMilldeware;
