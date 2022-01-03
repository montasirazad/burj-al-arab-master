import React, { createContext, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Book from './components/Book/Book';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';



export const userContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: '',
    email: '',
    photo: '',
    isLogged: false
  })

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {
        loggedInUser.name ? <h4>Welcome, {loggedInUser.name}</h4> : <h1> </h1>
      }

      <Header />
      <Routes>

        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/book' element={<Book />} />

        <Route path="/" element={<Home />} />
        <Route path='/book/:bedType' element={<PrivateRoute>
          <Book />
        </PrivateRoute>} />
      </Routes>
    </userContext.Provider>

  );
}

export default App;
