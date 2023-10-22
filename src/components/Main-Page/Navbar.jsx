import { Navbar as NavbarBs, Button } from 'react-bootstrap'
import './Navbar.css'
import {
  BiSolidHomeHeart,
  BiSolidContact,
  BiCategoryAlt,
  BiSun,
  BiMoon
} from 'react-icons/bi'
import Logo from '../../pic/FD.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { themeContext } from '../../context/themeContext'
import { colors } from '@mui/material'

const Navbar = () => {
  const { theme, setTheme } = useContext(themeContext)
  const setThemeNav = () => {
    if (theme === '#282528') {
      setTheme('white')
    } else {
      setTheme('#282528')
    }
  }
  return (
    <NavbarBs
      style={
        theme === 'white'
          ? {
            position: 'sticky', justifyContent: "space-around",

            top: '0',
            zIndex: '2',
            backgroundColor: 'white',
            boxShadow:
              '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
          }
          : {

            position: 'sticky', justifyContent: "space-around",
            top: '0',
            zIndex: '2',
            backgroundColor: '#282528',
            boxShadow:
              '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
          }
      }
      className='       rounded-pill my-3'
    >
      <NavbarBs className='justify-content-start'>
        <img
          width={ '80px' }
          src={ Logo }
          alt='logo ai and health'
          className='mx-5'
        />
      </NavbarBs>
      <NavbarBs.Collapse className='justify-content-end '>
        <Link to='/'>
          <Button id='but1' variant='btn rounded-5 mx-1   shadow'>
            <BiSolidHomeHeart className='mx-1'></BiSolidHomeHeart>Home
          </Button>
        </Link>
        <Link to='/Aplications'>
          <Button id='but2' variant='btn rounded-5 mx-1    shadow'>
            <BiCategoryAlt className=' mx-1'></BiCategoryAlt>Aplications
          </Button>
        </Link>
        <Link to='/ContactUs'>
          <Button id='but3' variant='btn rounded-5  mx-1   shadow'>
            <BiSolidContact className='mx-1'></BiSolidContact>Contact Us
          </Button>
        </Link>
        <Button
          width="auto"
          onClick={ setThemeNav }
          Align='center'
          id='but4'
        variant='btn rounded-5   m-4 shadow'
        >
        { theme === '#282528' ? <BiSun></BiSun> : <BiMoon></BiMoon> }
      </Button>
    </NavbarBs.Collapse>
    </NavbarBs >
  )
}
export default Navbar
