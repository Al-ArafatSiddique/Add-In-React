import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <header>
        <nav>
           
                <Link to='/colorRed'>Red</Link> <span> | </span>
                <Link to='/colorYellow'>Yellow</Link>
          
        </nav>

      </header>
    </div>
  )
}
