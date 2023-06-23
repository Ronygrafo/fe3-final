import React from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>Favs</li>
        <button>Change theme</button>
      </ul>
    </nav>
  )
}

export default Navbar
