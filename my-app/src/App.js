import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import WrestlerList from './pages/WrestlerList';
import NewWrestlerForm from './pages/NewWrestlerForm';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/wrestlers" element ={<WrestlerList/>} />
        <Route path="/wrestlers/new" element={<NewWrestlerForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
