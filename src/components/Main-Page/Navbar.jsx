import { Navbar as NavbarBs, Button } from "react-bootstrap";
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
      style={ { position: "sticky", top: "0", zIndex: '2', border: '1px solid', backgroundColor: 'white' } }
      className="    shadow   rounded-pill my-5"
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
          <Button
            variant="btn rounded-4 btn-outline-warning me-2  shadow"
            className="text-black"
          >
            <BiSolidHomeHeart className="mx-2"></BiSolidHomeHeart>Home
          </Button>
        </Link>
        <Link to='/Aplications'>
          <Button
            variant="btn rounded-4  btn-outline-primary me-2 shadow"
            className="text-black"
          >
            <BiCategoryAlt className=" mx-2"></BiCategoryAlt>Aplications
          </Button>
        </Link>
        <Link to='/ContactUs'>
          <Button
            variant="btn rounded-4 btn-outline-primary me-2 shadow"
            className="text-black"
          >
            <BiSolidContact className="mx-2"></BiSolidContact>Contact Us
          </Button>
        </Link>
      </NavbarBs.Collapse>
    </NavbarBs>
  );
};
export default Navbar;
