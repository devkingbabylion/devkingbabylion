import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/Home/HomePage';
import ProgrammingPage from '../Pages/Programming/ProgrammingPage';
import SearchPage from '../Pages/Search/SearchPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/programming" element={<ProgrammingPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}
