import React from 'react';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Classincrement from './Components/Classincrement';

function App() {
  return (
    <div>
      <header>
        <h1>Hello Team</h1>
        <p>Good morning to every one</p>
        <Header />
        <Navbar />
        <Classincrement />
      </header>
    </div>
  );
}

export default App;
