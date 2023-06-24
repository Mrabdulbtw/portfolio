import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../components/style/navbar.css"

export default function Navabar() {

    const [count, setCount] = useState(0)

    return (
        <div className='navbar'>
            <strong>portfolio</strong>
          <div className="link">
          <Link className={count === 1 ? 'change' : ''} onClick={() => setCount(1)} to='/' >Home</Link>
            <Link className={count === 2 ? 'change' : ''} onClick={() => setCount(2)} to='/project' >Projects</Link>
            <Link className={count === 3 ? 'change' : ''} onClick={() => setCount(3)} to='/education' >Education</Link>
          </div>
       </div>
    )
}

