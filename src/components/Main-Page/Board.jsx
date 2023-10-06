
import CarouselFadeExample from './CarouselFadeExample'
import { Col, Row } from 'react-bootstrap'


const Board = () => {
  return (
    <>
      <Row xs={ 1 } md={ 2 } className='g-2 mt-5' >
        <Col align='center' style={ {
          background: "rgba(0, 0, 0, 0.30)"
        } } className='my-auto shadow rounded-pill  '>
          <h1 className='text-white '>DIAGNOSTICS</h1>
          <h4 className='text-black'>BY</h4>
          <h4 className='text-warning'>AIANDHEALTH.NET</h4>
        </Col>
        <Col align='center' className='my-auto'>
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