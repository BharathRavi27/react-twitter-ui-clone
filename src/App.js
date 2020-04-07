import React from 'react';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <div className="side-nav">
        <Sidebar />
      </div>
      <div className="main">
        <Home />
      </div>
      <div className="side"></div>
    </div>
  );
}

export default App;
