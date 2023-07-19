import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../components/style/navbar.css"
import WrapTextIcon from '@mui/icons-material/WrapText';
import ClearIcon from '@mui/icons-material/Clear';
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SchoolIcon from '@mui/icons-material/School';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

export default function Navabar() {

  const [count, setCount] = useState(0)
  const [isValue, setIsValue] = useState(false)
  const location = useLocation()
  useEffect(() => {
    setIsValue(false)
  }, [location])

  return (
    <div className='navbar'>
      <strong>portfolio</strong>
      <WrapTextIcon className='open' onClick={() => {
        setIsValue(true)
      }} />
      <div className="link" id={isValue ? "open" : "close"}>
        <ClearIcon className='close' onClick={() => {
          setIsValue(false)
        }} />
        <div className="links">
          <Link className={count === 1 ? 'change' : ''} onClick={() => {setCount(1), setIsValue(false)}} to='/' > <HomeIcon/> <p>Home</p></Link>
          <Link className={count === 2 ? 'change' : ''} onClick={() => setCount(2)} to='/project' ><AccountTreeIcon/><p>Projects</p></Link>
          <Link className={count === 3 ? 'change' : ''} onClick={() => setCount(3)} to='/education'><SchoolIcon/><p>Education</p></Link>
          <Link className={count === 4 ? 'change' : ''} onClick={() => setCount(4)} to='/contact'><ContactMailIcon/><p>Contact</p></Link>
        </div>
      </div>
    </div>
  )
}

