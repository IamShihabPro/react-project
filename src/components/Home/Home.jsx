import React, { useEffect, useState } from 'react';
import SingleCards from '../SingleCards/SingleCards';

const Home = ({handleReadTime, handleBookMark}) => {
    const[cafes, setCafe] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data => setCafe(data))
    },[])

    return (
        <div>
            <div className="container">
                {
                    cafes.map(cafe =>(
                        <SingleCards cafe={cafe} key={cafe._id} handleReadTime={handleReadTime} handleBookMark={handleBookMark}></SingleCards>
                    ) )
                }
            </div>
        </div>
    );
};

export default Home;