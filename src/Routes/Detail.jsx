import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'
import { BsArrowLeft } from 'react-icons/bs'
import axios from 'axios'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { dentistsState, dentistsDispatch } = useContext(ContextGlobal)
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams()
  const navigate = useNavigate()

  const fetchDentistData = () => {
    axios('https://jsonplaceholder.typicode.com/users/' + id)
      .then(res => dentistsDispatch({ type: 'GET_DENTIST', payload: res.data }))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchDentistData()
  })

  const { name, email, phone, website } = dentistsState.dentist

  return (
    <>
      {/* <h1>Dentist id {currentDentist?.id}</h1> */}

      <button className='back-btn' onClick={() => navigate(-1)}>
        <BsArrowLeft />
      </button>
      <h1 className='detail-heading'>Detalle del Dentista</h1>

      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}

      <div className='card-grid'>
        <div className='card' style={{ width: '260px', gap: '8px' }}>
          <img src='../images/doctor.jpg' alt='doctor' />
          <h3 style={{ margin: '0' }}>{name}</h3>
          <strong>
            <p>ID: {id}</p>
          </strong>
          <p>{email}</p>
          <p>{phone}</p>
          <p>{website}</p>
        </div>
      </div>
    </>
  )
}

export default Detail
