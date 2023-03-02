import React from 'react';
//import { useState, useEffect } from 'react';
import Bloglist from './Bloglist';
import useFetch from '../src/useFetch';

function Home() {

  const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs")

  //const [name, setName] = useState("mario");

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id);
  //   setBlogs(newBlogs);
  // }
  



  return (
    <div className='content'>
      {error && <div>{error}</div>}
      {isPending && <div><h1>Getting Blogs......</h1></div>}
      { blogs &&  <Bloglist blogs={blogs} title={"All Blogs"} />}  
    </div>
  )
}

export default Home
