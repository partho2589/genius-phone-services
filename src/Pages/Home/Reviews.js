import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [review, setReviews] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div >
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20'>
            {
                review.map((review) => <Review
                key={review._id}
                review= {review}
                ></Review>)
            }
            </div>
        </div>
    );
};

export default Reviews;