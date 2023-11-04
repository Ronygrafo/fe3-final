import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import './header.css'

export function Header() {
  return (
    <header>
      <div className='container'>
        <h1>
          <NavLink to='/' end>
            <span>D</span>H Odonto 🦷
          </NavLink>
        </h1>
        <Navbar />
      </div>
    </header>
  )
}
