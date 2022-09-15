import React, { useState } from 'react'
import {  Link } from 'react-router-dom'

export default function Header() {
  const [show, setShow]=useState(false)
  const showHandler=()=>{
    setShow(true);
  }
  return (
    <div>
      <header>
        <nav>
           
                <Link to='/colorRed'>Red</Link> <span> | </span>
                {show && <Link to='/colorYellow'>Yellow</Link>}
                
          
        </nav>
        <button onClick={showHandler}>showYellow</button>
      </header>
    </div>
  )
}
