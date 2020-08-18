import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";
import Headers from "./components/Headers/Headers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Searchbar />
        <Headers />
      </div>


    </div>
  );
}

export default App;
