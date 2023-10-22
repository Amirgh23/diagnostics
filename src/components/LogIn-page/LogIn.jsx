import "./LogIn.css";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
// import { Col, Row } from "react-bootstrap";


const LogIn = () => {
  const { theme, setTheme } = useContext(themeContext)
  return (
    <>
      <div className="my-5" id="loginform" align="center">
        <form className="w-50 h-75 m-5" id="form" action="LogIn" style={ theme === "white" ? { backgroundColor: "white"  } : { backgroundColor: "#282528" } }>
          <label className="m-4" htmlFor="username" style={ theme === "white" ? { color: "black" } : { color: "#BF096C" }
          } ><h4 style={{borderBottom: "2px solid orange" , padding : "1rem 4rem"  ,}}>LOG IN</h4></label>
          <input name="username" className=" m-5 p-2 shadow" type="text" id="userinput" placeHolder="test@gmail.com" ></input>

          <input name="password" className=" m-5 p-2 shadow" type="password" id="passinput" placeHolder="password"></input>

          <Button variant="btn rounded-4   my-5 shadow" id="btnlog">Let's Go</Button>

        </form>
      </div>
    </>
  )
}
export default LogIn;