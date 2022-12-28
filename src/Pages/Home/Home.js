import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>THis is home.</h1>
            <Link to='/'>Home</Link>
            <Link to ="/about">About</Link>
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam inventore rem magni voluptate assumenda et error iusto aut dolorum ut corporis perferendis, iste officia doloremque nulla repudiandae atque harum architecto!</h1>
        </div>
    );
};

export default Home;