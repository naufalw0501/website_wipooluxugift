import React,{useEffect,useState} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Home, Gallery, Profile, Produk, Joinus, Prod1} from "./pages"
import {Footer, Navigation} from "./components"


function App() {

  return (
    <div className='App bg-slate-50'>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/produk" element={<Produk />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/joinus" element={<Joinus />}></Route>
        <Route path="/prod1" element={<Prod1/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;