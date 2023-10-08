import { Navbar as NavbarBs, Button } from "react-bootstrap";
import "./Navbar.css"
import {
  BiSolidHomeHeart,
  BiSolidContact,
  BiCategoryAlt,
} from "react-icons/bi";
import Logo from "../../pic/FD.png";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <NavbarBs
      style={ { position: "sticky", top: "0", zIndex: '2', backgroundColor: 'white', boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" } }
      className="       rounded-pill my-5"
    >
      <NavbarBs className="justify-content-start">
        <img
          width={ "80px" }
          src={ Logo }
          alt="logo ai and health"
          className="mx-5"
        />
      </NavbarBs>
      <NavbarBs.Collapse className="justify-content-end  mx-2">
        <Link to='/'>
          <Button id="but1"
            variant="btn rounded-5 me-2  shadow"
          >
            <BiSolidHomeHeart className="mx-2"></BiSolidHomeHeart>Home
          </Button>
        </Link>
        <Link to='/Aplications'>
          <Button id="but2"
            variant="btn rounded-5  me-2 shadow"
          >
            <BiCategoryAlt className=" mx-2"></BiCategoryAlt>Aplications
          </Button>
        </Link>
        <Link to='/ContactUs'>
          <Button id="but3"
            variant="btn rounded-5  me-2 shadow"
            
          >
            <BiSolidContact className="mx-2"></BiSolidContact>Contact Us
          </Button>
        </Link>
      </NavbarBs.Collapse>
    </NavbarBs>
  );
};
export default Navbar;
