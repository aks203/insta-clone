import React, {useState} from 'react';
import './App.css';
import Post from './Post';

function App() {

  const [posts, setposts] = useState([
    {
      imgSrc: "https://images.unsplash.com/photo-1597535586198-784a406931f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
      caption: "Wandering around...",
      userName: "AKS"
  },
    {
      imgSrc: "https://images.unsplash.com/photo-1597535586198-784a406931f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
      caption: "Wandering around......",
      userName: "AKS"
    }
  ])

  return (
    <div className="App">

      {/* Header */}
      <div className="app_header">
      <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
      alt="Instagram" className="app_headerImage"/>
      </div>
    
      {
        posts.map(post=> (
        <Post userName = {post.userName} caption = {post.caption} imgSrc = {post.imgSrc}/>
        ))
      
      }
    </div>
  );
}

export default App;
