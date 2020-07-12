import React from 'react';
import errorSvg from './error.svg';
import './error.css';
const ErrorMessage = () => {
    return (
        <>
            <img src={errorSvg} className="errorSvg" alt="error"/>
            <span className="errorMessage">Oops, something goes wrong...</span>
        </>
    )
}

export default ErrorMessage;