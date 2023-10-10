import { Container } from 'react-bootstrap'
// import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
// import { getApplication } from '../../data/items'
import { BiSolidNavigation } from 'react-icons/bi'
import './Application.css'



const Aplications = ({ getApp }) => {




  return (


    <Container
      style={ {
        background: 'rgba(0, 0, 0, 0.45)'
      } }
      className=' p-5 rounded-5 mb-5 shadow-lg'
    >
      <Row xs={ 1 } md={ 3 } className='g-4'>
        { getApp.map(getApp => (

          <Col className='' key={ getApp.name }>
            <Card align='center' className='bg-light rounded-4  shadow'>
              <Card.Img
                style={ { width: '400px', height: '200px' } }
                className=' rounded-4   img-fluid  my-0 p-2'
                // src={ `${Application.img}` }
                src={ getApp.photo }
              />
              <Card.Body>
                <Card.Title>{ getApp.name }</Card.Title>
                <Card.Text>{ getApp.about }</Card.Text>
                <button id='butapp' className='btn  rounded-5  mx-3 shadow'>
                  Go to App
                  <BiSolidNavigation className='mx-1 ' />
                </button>
              </Card.Body>
            </Card>
          </Col>
        )) }
      </Row>
    </Container>
  )
}

export default Aplications
