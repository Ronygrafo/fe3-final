import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className='contactBox'>
      <h1>Querés contactárnos</h1>
      <p>Dejá aquí tus datos... y te contáctaremos a la brevedad</p>
      <Form />
    </div>
  )
}

export default Contact
