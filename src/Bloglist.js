import React from 'react'
import { Link } from 'react-router-dom'

function Bloglist({blogs, title}) {

    // const blogs = props.blogs
    // const title = props.title
    //console.log(blogs, props)


  return (
    <div className='blog-list'>
        <h1>{title}</h1>
        {blogs.map ((blog) => (
            <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
            </Link>
            
            {/* //<h3>{blog.body}</h3> */}
            <p>Written by {blog.author}</p>
            
            </div>
            
        ))}
    </div>
  )
}

export default Bloglist
