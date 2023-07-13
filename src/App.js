import React from 'react';
import Navbar from './component/navbar';
import { BrowserRouter,} from 'react-router-dom';
import Home from './component/Home';
import Carousel from './component/Carousel';
import Card from './component/card';
import './App.css';
import Footer from './component/Footer';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Carousel />
      <Card />
      <Footer />
    </BrowserRouter>
   
  );
}

export default App;