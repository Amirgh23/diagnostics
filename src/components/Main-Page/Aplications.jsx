import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Aplications=() =>{
  return (
    <Container style={{
      background: "rgba(0, 0, 0, 0.45)"
    }} className=' p-5 rounded-5 mb-5 shadow-lg'>
    <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col className='' key={idx}>
          <Card align="center" className='bg-light rounded-4  shadow'>
            <Card.Img   className=' rounded-4   img-fluid  my-0 p-2'  src="https://mobisoftinfotech.com/resources/wp-content/uploads/2018/07/medical_diagnosis_apps_on_demand_healthcare_blog_banner_image_mobisoft_infotech.png" />
            <Card.Body>
              <Card.Title>APP</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            <button className='btn btn-outline-dark mx-3 px-4'>info</button>
            <button className='btn btn-outline-primary mx-3'>Go to App</button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
  );
}

export default Aplications;



// import {Col , Row} from 'react-bootstrap'
// const Aplications =()=>{
//   return(
//     <Row  xs={1} md={4} className='g-4'>
//       <Col align='center'>
//         <h3>Aplication</h3>
//       </Col>
//       <Col align='center'>
//         <h3>Aplication</h3>
//       </Col>
//       <Col align='center'>
//         <h3>Aplication</h3>
//       </Col>
//       <Col align='center'>
//         <h3>Aplication</h3>
//       </Col>
//     </Row>
//   )
// }
// export default Aplications