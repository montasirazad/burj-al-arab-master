import React from 'react';
import { createContext } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Book from './components/Book/Book';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

function App() {
  const userContest = createContext()
  return (
    <userContest.Provider>
      <Header />
      <Routes>
        
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/book/:bedType' element={<Book />} />
        <Route exact path="/" element={<Home />} />

      </Routes>
    </userContest.Provider>

  );
}

export default App;
