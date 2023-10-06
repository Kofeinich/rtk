import React, {FC} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from "./components/Home";

export const App : FC = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
  );
}

