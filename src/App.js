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
import Admin from './components/Admin-Page/Admin'
import { appContext } from './context/appDataContaxt'
import { themeContext } from './context/themeContext';


const App = () => {
  const [app, setApp] = useState([])
  const [theme, setTheme] = useState("white")
  useEffect(() => {
    const fetchData = async () => {
      try {
        // set loading
        const { data: appData } = await axios.get(
          'http://0.0.0.0:8000/api/v1/health/related-disease/list'
        )
        setApp(appData)

        //set loading false
      } catch (err) {
        console.log(err.message)
        //set loading false
      }
    }
    fetchData()
  }, [])
  return (
    <themeContext.Provider value={{theme , setTheme}}>
    <appContext.Provider value={ {
      app,
      setApp
    } }>
      <>
        <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element={
                <Container style={ {} }>
                  <Navbar></Navbar>
                  <Board></Board>
                  <Aplications ></Aplications>
                  <ContactUs></ContactUs>
                </Container>
              }
            />

            <Route
              path='/LogIn'
              element={
                <Container style={ {} }>
                  <Navbar></Navbar>
                  <br />
                  <br />
                  <LogIn></LogIn>
                </Container>
              }
            />
            <Route path='/Endo' element={ <Endo /> } />
            <Route path='/Admin' element={ <Admin /> } />
            <Route
              path='/Hematology'
              element={
                <Container>
                  <Navbar></Navbar>
                  <Hematology />
                  <ContactUs></ContactUs>
                </Container>
              }
            />
            <Route path='/Infant' element={ <Infant /> } />
            <Route path='/Medicaltoxicology' element={ <Medicaltoxicology /> } />
            <Route path='/NewNephrology' element={ <NewNephrology /> } />
            <Route path='/Poisoningsymptoms' element={ <Poisoningsymptoms /> } />
            <Route path='/Rheumatology' element={ <Rheumatology /> } />
            <Route path='*' element={ <p>page not found</p> } />
          </Routes>
        </BrowserRouter>
      </>
    </appContext.Provider>
    </themeContext.Provider>
  )
}

export default App
