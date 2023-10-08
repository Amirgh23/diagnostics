import { BiMapPin, BiMessageSquareDots, BiPhone } from "react-icons/bi"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Container } from 'react-bootstrap';
import "./ContactUs.css"
const ContactUs = () => {
  return (
    <footer  className="rounded-top-5" id="footer">
      <div id="ContactContent" className=" pt-5 ps-5 pe-5">
        <h1  id="hcontact" className="pb-4" align="center">Contact</h1>
        <p className="m-4" align="center" >
          Our consultants in artificial intelligence wear many different hats.
          Our services and solutions are designed to meet the specific needs of
          our customers. Our goal is to be a strategic partner trusted and
          relied upon by our customers. We are always there for our clients.
          Strong partnerships with companies who are industry leaders in the
          field allow us to offer the latest innovative technologies to our
          customers. Our on-site programmers can even customize these solutions
          exclusively for our customers as per their requirements. In addition,
          we support many organizations and individuals with our advanced
          skillset and services. Our customers include Government agencies,
          local private hospitals, universities, offices, doctors, and
          researchers to name a few.
        </p>
        <Container>
          <Row xs={ 1 } md={ 3 } className='g-3' align={ "center" }>
            <Col>
              <div>
                <h2>
                  <BiMapPin />
                </h2>
                <h2>
                  Our Address
                </h2>
                <h5>6421 N Tierra de las Catalinas, Tucson,AZ 85718</h5>
              </div>
            </Col>
            <Col>
              <div>
                <h2>
                  <BiMessageSquareDots />
                </h2>
                <h2>
                  Email Us
                </h2>
                <h5>info@aiandhealth.net</h5>
              </div>
            </Col>
            <Col>
              <div>
                <h2>
                  <BiPhone />
                </h2>
                <h2>
                  Call Us
                </h2>
                <h5>+1-720-525-5826</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  )
}
export default ContactUs
