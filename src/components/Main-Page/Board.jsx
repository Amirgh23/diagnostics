
import CarouselFadeExample from './CarouselFadeExample'
import { Col, Row } from 'react-bootstrap'
import './Board.css'


const Board = () => {
  return (
    <>
      <Row   xs={ 1 } md={ 2 } className='g-2 mt-5' >
        <Col align='center' style={ {
          background: "rgba(0, 0, 0, 0.85)"
        } } className='my-auto shadow rounded-pill p-4 '>
          <h3  className='text-white '>DIAGNOSTICS</h3>
          <h4  className='text-white'>BY</h4>
          <h1 id="diag"  className='text-white'>AIANDHEALTH.NET</h1>
        </Col>
        <Col align='center'
          className='my-5 shadow rounded-pill '>
          <CarouselFadeExample></CarouselFadeExample>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Board;