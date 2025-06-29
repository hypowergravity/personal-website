// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
// import Contact from './pages/Contact';
import Motivation from "./pages/Motivation";
import Learning from "./pages/Learning";
import { createPortal } from 'react-dom';
import Footer from './pages/Footer'; // Add this import


function App() {
    return (
        <Router>
            <div>
                {document.getElementById("nav-container") &&
                    createPortal(<Navbar />, document.getElementById("nav-container"))
                }
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/learning" element={<Learning/>}/>
                    <Route path="/motivation" element={<Motivation/>}/>
                    {/*<Route path="/contact" element={<Contact/>}/>*/}
                </Routes>
                <div>
                    {document.getElementById("footer-container") &&
                        createPortal(<Footer />, document.getElementById("footer-container"))
                    }
                </div>
            </div>
        </Router>
    );
}

export default App;