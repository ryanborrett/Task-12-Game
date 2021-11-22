import React from 'react';
import Board from './components/Board';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rules from './components/Rules';

function App() {
  return (
    <div>
      <h1>Minesweeper</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact={true} element={<Board/>}/>
          <Route path='/rules' element={<Rules/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;