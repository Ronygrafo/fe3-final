import Footer from './Components/Footer'
import { Header } from './Components/Header/Header'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'
import Detail from './Routes/Detail'
import './Components/Header/header.css'

function App() {
  return (
    <div className='App'>
      <div className='content-wrap'>
        <Header />
        <div className='mobile-menu'>
        <ul>
          <li> <button className='close-hamburger'>X</button> </li>
          <li className='mobile-nav'> <NavLink to='/' end> Inicio</NavLink> </li>
          <li className='mobile-nav'> <NavLink to='/contact'>Contacto</NavLink> </li>
          <li className='mobile-nav'> <NavLink to='/favs'>Favoritos</NavLink> </li>
        </ul>
      </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/favs' element={<Favs />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
