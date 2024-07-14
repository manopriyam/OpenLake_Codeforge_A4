import React from 'react';
import './ErrorPage.css';

const ErrorPage = () => {
    return (
        <div className='error'>
            <div className="errorimg"></div>
            <div className="errortext">Oops! Looks like we ran into an error. Try again later.</div>
        </div>
    );
};

export default ErrorPage;
