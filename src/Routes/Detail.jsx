import { useParams, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'
import { BsArrowLeft } from 'react-icons/bs'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { dentists } = useContext(ContextGlobal)
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams()
  const navigate = useNavigate()
  const currentDentist = dentists.find(dentist => dentist.id === parseInt(id))

  return (
    <>
      {/* <h1>Dentist id {currentDentist?.id}</h1> */}

      <button className='back-btn' onClick={() => navigate(-1)}>
        <BsArrowLeft />
      </button>
      <h1 className='detail-heading'>{currentDentist?.name}</h1>

      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}

      <div className='card-grid'>
        <div className='card' style={{ width: '260px' }}>
          <img src='../images/doctor.jpg' alt='doctor' />
          <p>{currentDentist?.name}</p>
          <strong>
            <p>ID: {currentDentist?.id}</p>
          </strong>
          <p>{currentDentist?.email}</p>
          <p>{currentDentist?.phone}</p>
          <p>{currentDentist?.website}</p>
        </div>
      </div>
    </>
  )
}

export default Detail
