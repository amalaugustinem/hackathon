import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Register from "./Components/Login/Register"
const App = () => {
  return (
    <>
        <Routes>
		  <Route path='/' element={<Register />} />
        </Routes>
    </>
  );
}

export default App;