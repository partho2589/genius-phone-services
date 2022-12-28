import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear();
    return (
        <div>
            <p><samp>CopyRight {year}</samp></p>
        </div>
    );
};

export default Footer;