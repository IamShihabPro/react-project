import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const SideCard = ({readTime, bookmark, item, count}) => {
    const [totalReadTime, setTotalReadTime] = useState(readTime)
    const[showBook, setBook] = useState(bookmark)

    const[newItem, setNewItem] = useState(item)

    useEffect(()=>{
        let getItems = item
        setNewItem(getItems)
    },[item])

    useEffect(()=>{
        const getReadTime = localStorage.getItem('readTime')
        setTotalReadTime(getReadTime);
    }, [readTime])

    useEffect(()=>{
        const getBookmark = bookmark
        setBook(getBookmark)
    },[bookmark])

    return (
        <div>
           <div className="card-container">
            <p className='text-center  w-75 mx-auto border border-primary rounded my-1 py-2 text-primary'>Spend time on read: {totalReadTime} min </p>

           </div>
           <div className='count-bookmark'>
            <h5 className='text-center w-75 mx-auto my-2 py-3 bg-secondary border border-secondary rounded text-light'>Bookmark Blogs: {count}</h5>
           
             {
                 newItem.map(p=> <p className='w-75 text-center mx-auto py-2 text-primary border border-primary shadow p-3 mb-5 bg-body rounded'>{p}</p>)
                }
                <p className='w-75 text-center mx-auto py-2 text-primary border border-primary shadow p-3 mb-5 bg-body rounded'>{showBook}</p>
            
           </div>
        </div>
    );
};

export default SideCard; 