import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Main-Page/Navbar';
import { Container } from 'react-bootstrap';
import Aplications from './components/Main-Page/Aplications'
import './App.css';
import Board from './components/Main-Page/Board'
import Endo from './components/Endo-Page/Endo';
import Hematology from './components/Hematology-Page/Hematology';
import Infant from './components/Infant-Page/Infant';
import Medicaltoxicology from './components/Medicaltoxicology-Page/Medicaltoxicology';
import NewNephrology from './components/NewNephrology-Page/NewNephrology';
import Poisoningsymptoms from './components/Poisoningsymptoms-Page/Poisoningsymptoms';
import Rheumatology from './components/Rheumatology-Page/Rheumatology';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <Container style={ { } }>
              <Navbar ></Navbar>
              <Board></Board>
              <Aplications ></Aplications>
            </Container > }/ >
          
          <Route path='/Endo' element={ <Endo /> } />
          <Route path='/Hematology' element={ <Hematology /> } />
          <Route path='/Infant' element={ <Infant /> } />
          <Route path='/Medicaltoxicology' element={ <Medicaltoxicology /> } />
          <Route path='/NewNephrology' element={ <NewNephrology /> } />
          <Route path='/Poisoningsymptoms' element={ <Poisoningsymptoms /> } />
          <Route path='/Rheumatology' element={ <Rheumatology /> } />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
