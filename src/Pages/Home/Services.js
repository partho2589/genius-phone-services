
import React, { useEffect, useState } from 'react';
import Service from './Service';
const Services = () => {
   
    const [service, setService] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/product")
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
    
    const [user, setUser] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(data => setUser(data))
    },[])
    
    const [visibal, setVigebal] = useState(3);
    const loadMore = ()=>{
        setVigebal ( visibal + 1);
    }
    return (
        <div>
            <h1 className='sm:text-2xl md:text-3xl  font-bold text-cyan-400 text-center mt-4 mb-3'>Our services </h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    service.slice(0,visibal).map((service) =>
                    <Service
                    key={service._id}
                    service={service}
                    ></Service>
                    
                    )
                }
                {/* {
                    user.map((user) => <Service
                    key={user.id}
                    service={user}
                    ></Service>)
                } */}
            </div>
            {visibal < service.length && (
                <button  onClick={loadMore}>all one data</button>
            )}

        </div>
    );
};

export default Services;