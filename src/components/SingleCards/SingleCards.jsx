import React from 'react';
import './SingleCards.css'

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const SingleCards = ({cafe, handleReadTime, handleBookMark}) => {
    
    return (
        <div>
           <div className='card'>
           <div className='main-card '>
                    <img className='img-fluid' src={cafe.picture} alt="" />
                </div>
                <div className='details d-flex justify-content-between my-3'>
                    <div className='d-flex'>
                        <img className='thumb' src={cafe.thumb} alt="" />
                        <div className='mx-4'>
                            <p>{cafe.name}</p>
                            <p>{cafe.date}</p>
                        </div>
                    </div>

                    <p> <span>{cafe.minute}</span> min read <button onClick={()=> handleReadTime(parseFloat(cafe.minute))} className='btn '> <FontAwesomeIcon icon={faBookmark} /></button> </p>
                    
                </div>
                <h2>{cafe.title}</h2>
                <p className='text-primary'> <span>{cafe.tags1}</span> <span>{cafe.tags2}</span> </p>
                
            <button className='btn text-primary' onClick={()=> handleBookMark(cafe.title)}>mark as read</button>
    
           </div>
                <hr className='my-4' />
        </div>
    );
};

export default SingleCards;