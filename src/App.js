import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from './components/Hero/Hero';

export default function App() {
  return(
    <div className="App">
      <Navbar />
      <Hero />
    </div>
  )
}
