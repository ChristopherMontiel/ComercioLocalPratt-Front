import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './containers/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFoundPage from './pages/NotFoundPage'
import Home from './pages/Home';
import AuthProvider from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='home' element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
