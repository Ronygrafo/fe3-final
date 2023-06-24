import React from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'

const Card = ({ name, username, id }) => {
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className='card'>
      <img src='./images/doctor.jpg' alt='doctor' />
      {/* En cada card deberan mostrar en name - username y el id */}
      <p>{name}</p>
      <p>User: {username}</p>
      <p>Id: {id}</p>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className='favButton'>
        <BsHeart />
      </button>
    </div>
  )
}

export default Card
