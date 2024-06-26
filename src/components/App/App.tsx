import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from '../MainPage/MainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* element={<ProtectedRouteElement element={<MainPage />} */}
      </Routes>
    </Router>
  );
}

export default App;
