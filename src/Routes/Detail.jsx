import { useParams, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { dentists } = useContext(ContextGlobal)
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams()
  const navigate = useNavigate()
  const currentDentist = dentists.find(dentist => dentist.id === parseInt(id))

  return (
    <>
      <button onClick={() => navigate(-1)}>Go back</button>
      <h1>Dentist id {currentDentist?.id}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div className='card'>
        <img src='../images/doctor.jpg' alt='doctor' />
        <p>{currentDentist?.name}</p>
        <p>{currentDentist?.email}</p>
        <p>{currentDentist?.phone}</p>
        <p>{currentDentist?.website}</p>
      </div>
    </>
  )
}

export default Detail
