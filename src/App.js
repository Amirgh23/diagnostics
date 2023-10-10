import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Main-Page/Navbar'
import { Container } from 'react-bootstrap'
import Aplications from './components/Main-Page/Aplications'
import './App.css'
import Board from './components/Main-Page/Board'
import LogIn from './components/LogIn-page/LogIn'
import ContactUs from './components/Main-Page/ContactUs'
import Endo from './components/Endo-Page/Endo'
import Hematology from './components/Hematology-Page/Hematology'
import Infant from './components/Infant-Page/Infant'
import Medicaltoxicology from './components/Medicaltoxicology-Page/Medicaltoxicology'
import NewNephrology from './components/NewNephrology-Page/NewNephrology'
import Poisoningsymptoms from './components/Poisoningsymptoms-Page/Poisoningsymptoms'
import Rheumatology from './components/Rheumatology-Page/Rheumatology'

const App = () => {
  const [getApp, setApp] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        // set loading
        const { data: appData } = await axios.get("http://127.0.0.1:8000/api/v1/health/related-disease/list");
        setApp(appData)

        //set loading false
      }
      catch (err) {
        console.log(err.message)
        //set loading false
      }
    }
    fetchData();
  }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Container style={ {} }>
                <Navbar></Navbar>
                <Board></Board>
                <Aplications getApp={getApp}></Aplications>
                <ContactUs></ContactUs>
              </Container>
            }
          />

          <Route path='/LogIn' element={
            <Container style={ {} }>
              <Navbar></Navbar>
              <LogIn></LogIn>
            </Container>

          } />
          <Route path='/Endo' element={ <Endo /> } />
          <Route path='/Hematology' element={ <Hematology /> } />
          <Route path='/Infant' element={ <Infant /> } />
          <Route path='/Medicaltoxicology' element={ <Medicaltoxicology /> } />
          <Route path='/NewNephrology' element={ <NewNephrology /> } />
          <Route path='/Poisoningsymptoms' element={ <Poisoningsymptoms /> } />
          <Route path='/Rheumatology' element={ <Rheumatology /> } />
          <Route path='*' element={ <p>page not found</p> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
