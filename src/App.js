import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Main-Page/Navbar';
import { Container } from 'react-bootstrap';
import Aplications from './components/Main-Page/Aplications'
import './App.css';
import Board from './components/Main-Page/Board'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <Container>
              <Navbar></Navbar>
              <Board></Board>
              <Aplications ></Aplications>
            </Container > } />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
