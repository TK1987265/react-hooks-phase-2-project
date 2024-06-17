import React from 'react';
import  { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import WrestlerList from './pages/WrestlerList';
import NewWrestlerForm from './pages/NewWrestlerForm';

function App() {
  const [wrestlers, setWrestlers] = useState([]);
  useEffect(() => {
    fetch(`https://react-hooks-phase-2-project-3.onrender.com/wrestlers`)
    .then((r) => r.json())
    .then(data =>setWrestlers(data));
  }, []);
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/wrestlers" element ={<WrestlerList wrestlers={wrestlers}/>} />
        <Route path="/wrestlers/new" element={<NewWrestlerForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
