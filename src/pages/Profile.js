import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [authors, setAuthors] = useState([]);
  const username = 'John Doe';
  const num1 = 0;

  // Array of post objects
  const posts = [
    { title: 'Post 1', content: 'Content of Post 1' },
    { title: 'Post 2', content: 'Content of Post 2' },
    { title: 'Post 3', content: 'Content of Post 3' },
  ];

  // Style object with the desired styles
  const containerStyles = {
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start', // Align the container content at the start (top)
    alignItems: 'center',
    height: '100vh', // Set the height of the container to 100% of the viewport height
  };

  const padding = {
    margin: '10px', // Add spacing between child elements if desired
  };

  const lineStyles = {
    borderBottom: '1px solid white',
    width: '100%',
    margin: '10px 0', // Adjust spacing above and below the line
    marginTop: '25px', // Add margin at the bottom of the line
  };

  useEffect(() => {
    // Function to fetch authors
    const fetchAuthors = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/service/authors');
        if (!response.ok) {
          throw new Error('Failed to fetch authors');
        }

        const data = await response.json();
        setAuthors(data.items);
      } catch (error) {
        console.error(error);
      }
    };

    // Call the function to fetch authors when the component mounts
    fetchAuthors();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  // Render the fetched authors
  return (
    <div style={containerStyles}>
      <div style={padding}> logo </div>
      <div style={padding}> {username} </div>
      <div style={padding}> {num1} Posts {num1} Following {num1} Followers </div>
      <div style={lineStyles}></div>

      {/* Map over the posts array and render each post */}
      {posts.map((post, index) => (
        <div key={index} style={padding}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}

      {/* Map over the fetched authors and render each author */}
      {authors.map((author, index) => (
        <div key={index} style={padding}>
          <h3>{author.displayName}</h3>
          <p>{author.url}</p>
          {/* Add more properties as needed */}
        </div>
      ))}
    </div>
  );
};

export default Profile;
