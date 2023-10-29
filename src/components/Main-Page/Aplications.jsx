import { Container } from 'react-bootstrap'
// import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
// import { getApplication } from '../../data/items'
import { BiSolidNavigation } from 'react-icons/bi'
import './Application.css'

import { useContext } from 'react'
import { appContext } from '../../context/appDataContaxt'
import { ThemeContext, themeContext } from '../../context/themeContext'

const Aplications = () => {
  const {
    app
    //  , setApp
  } = useContext(appContext)

  const { theme, setTheme } = useContext(themeContext)

  return (
    <Container
id={theme==="#282528dc"?'AppD':'AppL'}
      className=' p-5 rounded-5 mb-5 shadow-lg'
    >
      <Row xs={1} md={3} className='g-4'>
        {app.map(getApp => (
          <Col className='' key={getApp.name}>
            <Card
            id={theme==="#282528dc"?'AppcardD':'AppcardL'}
              align='center'
              className='rounded-4  shadow'
            >
              <Card.Img
                style={{ width: '400px', height: '200px' }}
                className=' rounded-4   img-fluid  my-0 p-2'
                // src={ `${Application.img}` }
                src={getApp.photo}
              />
              <Card.Body>
                <Card.Title>{getApp.name}</Card.Title>
                <Card.Text>{getApp.about}</Card.Text>
                <button id='butapp'
              className='btn  rounded-5  '>
                  Go to App
                  <BiSolidNavigation className='mx-1 ' />
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Aplications
