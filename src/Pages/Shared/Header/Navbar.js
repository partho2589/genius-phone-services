import React from 'react';
import { Link } from 'react-router-dom';

const  Navbar = () => {
    return (
        <div>
       <Link to='/'>Home</Link>    
       <Link to='/about'>About</Link>
       <button class="btn btn-primary">Button</button>    
        </div>
    );
};

export default Navbar;