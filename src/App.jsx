import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';


const Home = () => (
  <div className="page home">
    <h1>Welcome to Our World</h1>
    <p>Discover a collection of our moments captured in time.</p>
    <div className="hero-placeholder"></div>
  </div>
);

const About = () => (
  <div className="page about">
    <h1>About the Photographer</h1>
    <p>Focusing on street photography, landscapes, and minimalist design.</p>
  </div>
);

const Gallery = () => {
  const photos = [
    { id: 10, title: "Nature" },
    { id: 20, title: "Workspace" },
    { id: 30, title: "Architecture" },
    { id: 40, title: "Forest" },
    { id: 50, title: "Ocean" },
    { id: 60, title: "Laptop" }
  ];

  return (
    <div className="page gallery">
      <h1>Photo Gallery</h1>
      <div className="grid">
        {photos.map(photo => (
          <div key={photo.id} className="card">
            <img src={`https://picsum.photos/id/${photo.id}/600/400`} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


function App() {
  return (
    <Router>
      <div className="App">
        <header className="navbar">
          <div className="logo">Kuri.Yuri</div>
          <nav>
            {/* Standard React Links (no target="_blank") */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/gallery">Gallery</Link>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;