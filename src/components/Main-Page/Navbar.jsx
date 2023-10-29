import { Navbar as NavbarBs, Button } from 'react-bootstrap'
import './Navbar.css'
import {
  BiSolidHomeHeart,
  BiSolidContact,
  BiCategoryAlt,
  BiSolidSun,
  BiSolidMoon
} from 'react-icons/bi'
import Logo from '../../pic/FD.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { themeContext } from '../../context/themeContext'

const Navbar = () => {
  const { theme, setTheme } = useContext(themeContext)
  const setThemeNav = () => {
    if (theme === '#282528dc') {
      setTheme('#ffffff7a')
    } else {
      setTheme('#282528dc')
    }
  }
  return (
    <NavbarBs
    id={theme==="#282528dc"?'NavbarD':'NavbarL'}
      className=' rounded-pill my-3'
    >
      <NavbarBs className='justify-content-start'>
        <img
          width={'90rem'}
          src={Logo}
          alt='logo ai and health'
          className='mx-5'
        />
      </NavbarBs>
      <NavbarBs.Collapse className='justify-content-end '>
        <Link to='/'>
          <Button
            // id={theme === 'white' ? 'but1' : 'but2'}
            id={theme==="#282528dc"?'but1D':'but1L'}
            variant='btn  mx-1 '
          >
            <BiSolidHomeHeart className='mx-1'></BiSolidHomeHeart>Home
          </Button>
        </Link>
        <Link to='/Aplications'>
          <Button id={theme==="#282528dc"?'but2D':'but2L'} variant='btn  mx-1  '>
            <BiCategoryAlt className=' mx-1'></BiCategoryAlt>Applications
          </Button>
        </Link>
        <Link to='/ContactUs'>
          <Button id={theme==="#282528dc"?'but3D':'but3L'} variant='btn   mx-1 '>
            <BiSolidContact className='mx-1'></BiSolidContact>Contact Us
          </Button>
        </Link>
        <Button
          width='auto'
          onClick={setThemeNav}
          Align='center'
          id='but4'
          variant='btn rounded-5   mx-4'
        >
          {theme === '#282528dc' ? (
            <BiSolidSun></BiSolidSun>
          ) : (
            <BiSolidMoon></BiSolidMoon>
          )}
        </Button>
      </NavbarBs.Collapse>
    </NavbarBs>
  )
}
export default Navbar
