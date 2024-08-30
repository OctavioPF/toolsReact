import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ToDoList from './components/ToDoList';
import MemoryGame from './components/MemoryGame';
import Blog from './components/Blog';
import ClockAndTimer from './components/ClockAndTimer';
import CurrencyConverter from './components/CurrencyConverter';
import Profile from './components/Profile';
import Header from './components/Header';
import Home from './components/ViewHome';

function App() {
  return (
    <Router>
      
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<ToDoList />} />
          <Route path="/memory-game" element={<MemoryGame />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/clock" element={<ClockAndTimer />} />
          <Route path="/currency" element={<CurrencyConverter />} />
          <Route path="/perfil" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
