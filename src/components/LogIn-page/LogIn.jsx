import "./LogIn.css";
import { Button } from "react-bootstrap";
// import { Col, Row } from "react-bootstrap";


const LogIn = () => {
  return (
    <>
      <div className="my-5" id="loginform" align="center">
        <form className="w-50 h-75 m-5" id="form" action="LogIn">

          <label className="mt-4" htmlFor="username"><h4>UserName</h4></label>
          <input name="username" className=" mt-4 p-2" type="text" id="userinput" placeHolder="test@gmail.com" ></input>

          <label className="mt-4" htmlFor="password"><h4>password</h4></label>
          <input name="password" className=" mt-4 p-2" type="password" id="passinput" placeHolder="password"></input>

          <Button variant="btn rounded-4   my-5 shadow" id="btnlog">LOG IN</Button>

        </form>
      </div>
    </>
  )
}
export default LogIn;