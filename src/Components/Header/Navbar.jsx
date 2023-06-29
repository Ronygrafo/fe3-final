import { NavLink } from 'react-router-dom'
import ThemeToggleButton from './ThemeToggleButton'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

      <ul>
        <li className='desktop-nav'> <NavLink to='/' end> Inicio</NavLink> </li>
        <li className='desktop-nav' > <NavLink to='/contact'>Contacto</NavLink> </li>
        <li className='desktop-nav' > <NavLink to='/favs'>Favoritos</NavLink> </li>
        <ThemeToggleButton />
      </ul>
    </nav>
  )
}

export default Navbar
