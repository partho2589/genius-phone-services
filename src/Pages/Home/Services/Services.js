
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
const Services = () => {
    //  const services =[
    //     {
    //         _id: 1,
    //         name: 'Fluoride Treatment',
    //         description: '',
    //         img: ''
    //     },
    //     {
    //         _id: 2,
    //         name: 'Cavity Filling',
    //         description: '',
    //         img: ''
    //     },
    //     {
    //         _id: 3,
    //         name: 'Teeth Whitening',
    //         description: '',
    //         img: ''
    //     },
    // ];
    const [services, setServices] = useState()
    useEffect(() => {
        fetch("http://localhost:5000/product")
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div>
            <h1 className='text-3xl  font-bold text-cyan-400 text-center mt-4 mb-3'>Our services </h1>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default Services;