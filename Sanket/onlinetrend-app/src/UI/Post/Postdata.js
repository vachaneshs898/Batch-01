import React from 'react'
import Post from './Post'

const Postdata = () => {
  const post_date = [
    {
      src: "https://th.bing.com/th/id/OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa?w=206&h=206&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      alt: "User-pic-1",
      name: "Sanket Hanche"
    },
    {
      src: "https://th.bing.com/th/id/OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa?w=206&h=206&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      alt: "User-pic-1",
      name: "Sanket Hanche"
    }
  ]
  return (
    <div>
      {Postdata.map((item) => {
        <Post
          src={item.src}
          alt={item.alt}
          name={item.name}
        />
      })}

    </div>
  )
}

export default Postdata