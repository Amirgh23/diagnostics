import { BiMapPin, BiMessageSquareDots, BiPhone } from "react-icons/bi"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Container } from 'react-bootstrap';
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import "./ContactUs.css"
const ContactUs = () => {
  const { theme
    // , setTheme 
  } = useContext(themeContext)
  return (
    
    <footer  className="rounded-top-5" id="footer" style={{backgroundColor: 
    // `${theme}` 
    "#ffffff7a"
    , transition: 'all 0.6s'}}>
      <div id="ContactContent" className=" pt-5 ps-5 pe-5">
        <h1  id="hcontact" className="pb-4" align="center">Contact Us</h1>
        <p className="m-5" align="center" style={theme === "white" ? {color :"#282528"} :{color : "white"}} >
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
          <Row xs={ 1 } md={ 2 } className='g-3 pb-5' align={ "center" }>
            <Col >
              <div >
                <h2 >
                  <BiMapPin id="bima"  className="w-25 h-25  rounded-circle p-2 " />
                </h2>
                <h2 id="hmap"  className="p-3 " >
                  Our Address
                </h2>
                <h5 style={theme === "white" ? {color :"#282528"} :{color : "#F98221"}}>6421 N Tierra de las Catalinas, Tucson,AZ 85718</h5>
              </div>
            </Col>
            <Col>
              <div>
                <h2>
                  <BiMessageSquareDots id="bime" className="w-25 h-25  rounded-circle p-2" />
                </h2>
                <h2 id="hemail" className="p-3 ">
                  Email Us
                </h2>
                <h5 style={theme === "white" ? {color :"#282528"} :{color : "#F98221"}}>info@aiandhealth.net</h5>
              </div>
            </Col>

          </Row>
        </Container>
      </div>
    </footer>
  )
}
export default ContactUs
