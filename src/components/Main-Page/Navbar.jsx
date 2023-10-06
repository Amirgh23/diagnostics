import { Navbar as NavbarBs, Button } from 'react-bootstrap'
import { BiSolidHomeHeart, BiSolidContact, BiCategoryAlt } from 'react-icons/bi'
import Logo from '../../pic/FD2.jpg'

const Navbar = () => {
  return (
    <NavbarBs className=' border-bottom-white bg-white shadow-lg  border-2   rounded-pill my-2'>
      <NavbarBs className='justify-content-start'>
        <img
          width={'80px'}
          src={Logo}
          alt='logo ai and health'
          className='mx-5'
        />
      </NavbarBs >
      <NavbarBs.Collapse className='justify-content-end  mx-3'>
        <Button variant='btn rounded-pill btn-outline-warning mx-2 shadow' className='text-black'>
          <BiSolidHomeHeart className='mx-2'></BiSolidHomeHeart>Home
        </Button>
        <Button variant='btn rounded-pill btn-outline-primary mx-2 shadow' className='text-black'>
          <BiCategoryAlt className='mx-2'></BiCategoryAlt>Aplications
        </Button>
        <Button variant='btn rounded-pill btn-outline-primary mx-2 shadow' className='text-black'>
          <BiSolidContact className='mx-2'></BiSolidContact>Contact Us
        </Button>
      </NavbarBs.Collapse>
    </NavbarBs>
  )
}
export default Navbar
