import { useState } from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LoginForm from './components/LoginForm';
import Home from './components/Home'


function App() {
  return(
    <div>
      <h1>Teste</h1>
      <Routes>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
