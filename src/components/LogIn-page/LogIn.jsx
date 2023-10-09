import "./LogIn.css";
import { Col, Row } from "react-bootstrap";

const LogIn = () => {
  return (
    <>
      <div className="my-5" id="loginform" align="center">
        <form className="w-50 h-75 m-5" action="LogIn">
          <Row xs={ 1 } md={ 2 } className='g-2' align="center" >
            <Col >
              <input type="text" label="Username" placeHolder="Username"></input>
            </Col>
            <Col>
              <input type="password" label="password" placeHolder="password"></input>
            </Col>
          </Row>
        </form>
      </div>
    </>
  )
}
export default LogIn;