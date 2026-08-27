import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Hydropower1 from './Pages/Hydropower1';
import Hydropower2 from './Pages/Hydropower2';
import Hydropower3 from './Pages/Hydropower3';
import Hydropower4 from './Pages/Hydropower4';
import Hydropower5 from './Pages/Hydropower5';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hydropower1" element={<Hydropower1 />} />
        <Route path="/hydropower2" element={<Hydropower2 />} />
        <Route path="/hydropower3" element={<Hydropower3 />} />
        <Route path="/hydropower4" element={<Hydropower4 />} />
        <Route path="/hydropower5" element={<Hydropower5 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
