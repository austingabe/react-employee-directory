import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Results from "./components/Results/Results";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Results />
      </div>


    </div>
  );
}

export default App;