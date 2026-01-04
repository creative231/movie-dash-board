import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Movie from "./data/Movie";
import Navbar from './components/Navbar';
import HomePage from './components/Homepage';
import UserProfile from './components/Userprofile';


function App() {
  return (
    <>
            <Header />
            <Navbar />
            <Routes>
              <Route path="/profile" element={<UserProfile />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/movies" element={<Movie />} />
                <Route path="/about" element={<About />} />
            </Routes>
           <Footer />
    </>
  );
}

export default App;
