import React from 'react';
import Service from '../Service/Service';
const Services = () => {
 const services =[
    {
        _id: 1,
        name: 'Fluoride Treatment',
        description: '',
        img: ''
    },
    {
        _id: 2,
        name: 'Cavity Filling',
        description: '',
        img: ''
    },
    {
        _id: 3,
        name: 'Teeth Whitening',
        description: '',
        img: ''
    },
];
    return (
        <div>
            <div><h1 className='text-3xl  font-bold text-cyan-400 text-center mt-4 mb-3'>Our services </h1></div>
            <h1>This is service </h1>
           {
            services.map(service => <Service
            key={service._id}
            service = {service}
            ></Service>)
           }
        </div>
    );
};

export default Services;