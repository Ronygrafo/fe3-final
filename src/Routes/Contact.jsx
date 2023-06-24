import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div>
      <h2>Querés contactárnos</h2>
      <p>Dejá aquí tus datos... y en poco te escribimos:</p>
      <Form/>
    </div>
  )
}

export default Contact