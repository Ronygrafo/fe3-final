import { useContext, useState } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'
import { Link } from 'react-router-dom'
import { BsHeart, BsHeartFill } from 'react-icons/bs'

const Card = ({ name, username, id }) => {
  const { favState, favDispatch } = useContext(ContextGlobal)
  const [imageLoaded, setImageLoaded] = useState(false)

  const isFav = favState.some(fav => fav.id === id)

  const onFavClick = e => {
    // Aqui iria la logica para agregar la Card en el localStorage
    e.stopPropagation()
    if (isFav) {
      favDispatch({ type: 'DELETE_FAV', payload: id })
    } else {
      favDispatch({ type: 'ADD_FAV', payload: { name, username, id } })
    }
  }

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  return (
    <div className='card-wraper'>
      <Link className='card' to={`/detail/${id}`}>
        {!imageLoaded && <div className='skeleton_img'></div>}
        <img
          src='./images/doctor.jpg'
          alt='doctor'
          onLoad={handleImageLoad}
          style={{ display: imageLoaded ? 'block' : 'none' }}
        />
        {/* En cada card deberan mostrar en name - username y el id */}
        <p>{name}</p>
        <p>User: {username}</p>
        <p>Id: {id}</p>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      </Link>
      <button
        onClick={onFavClick}
        className={`favButton ${isFav ? 'favorited' : ''}`}
      >
        {isFav ? <BsHeartFill /> : <BsHeart />}
      </button>
    </div>
  )
}

export default Card
