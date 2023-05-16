import './App.css';
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function App() {
  const pathname = process.env.REACT_APP_PATHNAME ? process.env.REACT_APP_PATHNAME : '';

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/verify" element={<VerifyPoem hanzi_table={hanzi_table}/>} />
          <Route path="/categories" element={<TextFileDisplay filename="categories.txt" pathname={pathname} />} />
          <Route path="/characters" element={<TextFileDisplay filename="characters.txt" pathname={pathname} />} />
        </Routes> 
      </Router>
    </div>
  );
}

export default App;
