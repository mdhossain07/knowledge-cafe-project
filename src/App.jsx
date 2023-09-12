import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmarks = (title) => {
    const newBookmarks = [...bookmarks, title];
    setBookmarks(newBookmarks);
  } 
  
  return (
    <>
      <Header> </Header>
      <div className='flex justify-between'>
          <Blogs handleBookmarks = {handleBookmarks} ></Blogs>
          <Bookmarks bookmarks = {bookmarks}></Bookmarks>        
      </div>
      
    </>
  )
}

export default App
