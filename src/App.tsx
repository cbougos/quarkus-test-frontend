import React from 'react';
import './App.css';
import UsersPage from './users/users-page/UsersPage';
import HomePage from './home/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './menu/Menu';

function App() {
  return (
    <div id="outer-container">
      <Menu />
      <main id="page-wrap">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='users' element={<UsersPage />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
