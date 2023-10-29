import CarouselFadeExample from './CarouselFadeExample'
import { Col, Row } from 'react-bootstrap'
import './Board.css'
import { useContext } from 'react'
import { themeContext } from '../../context/themeContext'

const Board = () => {
  const { theme, setTheme } = useContext(themeContext)
  return (
    <>
      <Row xs={1} md={2} className='g-2 mt-5'>
        <Col
          align='center'
          id={theme==="#282528dc"?'BoardD':'BoardL'}
          className='my-auto shadow rounded-pill p-5 '
        >
          <h3 className='text-white '>DIAGNOSTICS</h3>
          <h4 className='text-white'>BY</h4>
          <h1 id={theme==="#282528dc"?'DiagD':'DiagL'}>AIANDHEALTH.NET</h1>
        </Col>
        <Col align='center' className='my-5 shadow rounded-pill '>
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

export default Board
