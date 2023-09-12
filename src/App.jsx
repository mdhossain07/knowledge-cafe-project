import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);
  console.log(bookmarks);

  const handleBookmarks = (blog) => {
      const newBookmarks = [...bookmarks, blog];
      setBookmarks(newBookmarks);
  } 

  const handleReadTime = (time,id) => {
    setReadTime(readTime + time);
    const removedBookmark = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(removedBookmark);
  }
  
  return (
    <>
      <Header> </Header>
      <div className='flex justify-between'>
          <Blogs 
              handleBookmarks = {handleBookmarks} 
              handleReadTime = {handleReadTime}>
            </Blogs>
          <Bookmarks 
              bookmarks = {bookmarks}
              readTime={readTime}>
          </Bookmarks>        
      </div>
      
    </>
  )
}

export default App
