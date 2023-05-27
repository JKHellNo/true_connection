import React from 'react'
import axios from 'axios'

//make a function that will post the data to the server

const PostForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: "Hello World",
      body: "This is a test post"
    }
    axios.post('https://jsonplaceholder.typicode.com/posts', data)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="title" placeholder="Title" />
        </div>
        <div>
          <input type="text" name="body" placeholder="Body" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default PostForm