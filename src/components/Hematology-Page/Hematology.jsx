
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { BiSolidNavigation } from 'react-icons/bi'
import "./Hematology.css"

const Hematology = () => {
  return (
    <>
      <header align="center" style={ {} }>
        <h1 style={ { display: "inline-block", color: "white", background: "rgba(0, 0, 0, 0.60)" } } className='p-4 m-3 rounded-pill'>Hematology Application</h1>
        <Row xs={ 1 } md={ 3 } className='g-3 m-5'>
          <Col>
            <Card align='center' className='bg-light rounded-4  shadow'>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text></Card.Text>
                <button id='butapp' className='btn  rounded-5  mx-3 shadow'>
                  Try It
                  <BiSolidNavigation className='mx-1 ' />
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card align='center' className='bg-light rounded-4  shadow'>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text></Card.Text>
                <button id='butapp' className='btn  rounded-5  mx-3 shadow'>
                  Try It
                  <BiSolidNavigation className='mx-1 ' />
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card align='center' className='bg-light rounded-4  shadow'>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text></Card.Text>
                <button id='butapp' className='btn  rounded-5  mx-3 shadow'>
                  Try It
                  <BiSolidNavigation className='mx-1 ' />
                </button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </header>
    </>
  )
}
export default Hematology;