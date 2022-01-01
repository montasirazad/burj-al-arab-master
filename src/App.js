import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Book from './components/Book/Book';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
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
        loggedInUser.name ? <h1>Welcome,{loggedInUser.name}</h1> : <h1></h1>
      }

      <Header />
      <Routes>

        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />

        <Route exact path="/" element={<Home />} />

        <Route path='/book/:bedType' element={<PrivateRoute>
          <Book />
        </PrivateRoute>} />

      </Routes>
    </userContext.Provider>

  );
}

export default App;
