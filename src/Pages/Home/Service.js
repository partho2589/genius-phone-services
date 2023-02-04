import React from 'react';

const Service = ({ service }) => {
    const {name, img,description,price} = service;
    
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-start text-left">
                <h2 className="card-title text-xl">{name}</h2>
                <p><span>Price: ${price}</span></p>
                <p className='text-sm'>{description}</p>
                <div className="card-actions">
                <button className="btn btn-success">By Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;