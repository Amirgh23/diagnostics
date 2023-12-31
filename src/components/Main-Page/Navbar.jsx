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
              position: 'sticky',
              justifyContent: 'space-around',

              top: '0',
              zIndex: '2',
              backgroundColor: 'white',
              boxShadow:
                '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
              transition: 'all 0.6s'
            }
          : {
              position: 'sticky',
              justifyContent: 'space-around',
              top: '0',
              zIndex: '2',
              backgroundColor: '#282528',
              boxShadow:
                '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
              transition: 'all 0.6s'
            }
      }
      className=' rounded-pill my-3'
    >
      <NavbarBs className='justify-content-start'>
        <img
          width={'80px'}
          src={Logo}
          alt='logo ai and health'
          className='mx-5'
        />
      </NavbarBs>
      <NavbarBs.Collapse className='justify-content-end '>
        <Link to='/'>
          <Button
            // id={theme === 'white' ? 'but1' : 'but2'}
            id='but1'
            variant='btn rounded-5 mx-1   shadow'
          >
            <BiSolidHomeHeart className='mx-1'></BiSolidHomeHeart>Home
          </Button>
        </Link>
        <Link to='/Aplications'>
          <Button id='but2' variant='btn rounded-5 mx-1    shadow'>
            <BiCategoryAlt className=' mx-1'></BiCategoryAlt>Applications
          </Button>
        </Link>
        <Link to='/ContactUs'>
          <Button id='but3' variant='btn rounded-5  mx-1   shadow'>
            <BiSolidContact className='mx-1'></BiSolidContact>Contact Us
          </Button>
        </Link>
        <Button
          width='auto'
          onClick={setThemeNav}
          Align='center'
          id='but4'
          variant='btn rounded-pill   m-4 shadow'
          style={
            theme === '#282528'
              ? {
                  color: 'white',
                  borderColor: '#EA6434',
                  backgroundColor: '#EA6434',
                  transition: 'all 0.6s'
                }
              : {
                  color: '#282528',
                  borderColor: '#282528',
                  backgroundColor: 'rgb(186, 4, 112)',
                  transition: 'all 0.6s'
                }
          }
        >
          {theme === '#282528' ? (
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
