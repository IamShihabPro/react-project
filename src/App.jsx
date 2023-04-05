import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import SideCard from './components/SideCard/SideCard';
import Cards from './components/Cards/Cards';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [readTime, setReadTime] = useState('')
  const [bookmark, setBookmark] = useState('')
  const [item, setItem] = useState([])
  const [count , setCount] = useState(0)


  const handleReadTime = (minute)=>{
  const previousReadTime = JSON.parse(localStorage.getItem("readTime"))

    if(previousReadTime){
      const sum = previousReadTime + minute
      localStorage.setItem("readTime", sum)
      setReadTime(sum)
    }
    else{
      localStorage.setItem("readTime", minute)
      setReadTime(minute)
    }
   
  }
  const handleBookMark =(bookmarks)=>{
    setBookmark(bookmarks);
    setItem([...item, bookmark])
    setCount(count + 1)
    
    // toast show
    if(item === item){
      toast("Bookmark added")
    }
    else{
      toast("Bookmark already exits")
    }
    
  }
 

  return (
    <div className="App container">
      <Header></Header>
      <div className='main row mx-2'>
        <div className="home-container col-md-8 ">
          <Home handleReadTime={handleReadTime} handleBookMark={handleBookMark}></Home>
        </div>
        <div className="side-card col-md-4 ">
          <SideCard readTime={readTime} bookmark={bookmark} item={item} count={count}></SideCard>
        </div>
      </div>
      <Cards></Cards>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
