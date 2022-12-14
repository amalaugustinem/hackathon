import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Register from "./Components/Login/Register"
import { AuthProvider } from "./Context/AuthContext"; 
import Login from "./Pages/Login"
// import Home from "./Pages/home/Home";
import Dashboard from "./Pages/dashboard"

const App = () => {
  return (
    <>
    <AuthProvider>
        <Routes>
      <Route path='/' element={<Login />} />  
		  <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
        </AuthProvider>
    </>
  );
}

export default App;