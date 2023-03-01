import React from 'react';

const Review = ({ review }) => {
    const {img} = review;
  
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl ">
                <img className="mask mask-star-2"width={200} height={200} src={img} alt=""/>
                <div className="card-body">
                    <p>Click the button to watch on Jetflix app.</p>
                    {/* <h4>{name2}</h4> */}
                </div>
            </div>
        </div>
    );
};

export default Review;