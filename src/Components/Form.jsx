import React from "react";
import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [leadData, setLeadData] = useState({
    name: "",
    email: "",
  });

  const handleNameData = (e) =>{
    // Validar NOMBRE con longitud mayor a 5 y sin Espacio en blanco al iniciar

    // console.log(e.target.value.length > 5 && (e.target.value.charAt(0) !== " "));
    if (e.target.value.length > 5 && (e.target.value.charAt(0) !== " ")){
      setLeadData({
        ...leadData,
        name: e.target.value})
    };
    //console.log(leadData);
  }

  const handleEmailData = (e) =>{
    // Validar EMAIL válido con REGEX
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    //console.log(regex.test(e.target.value));

    if (regex.test(e.target.value)){
      setLeadData({
        ...leadData,
        email: e.target.value})
    };
    //console.log(leadData);
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`LEAD RECIBIDO: \n Nombre: ${leadData.name} \n Email: ${leadData.email} \n ========================`);
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>

      <input type="text" name="name" placeholder="Nombre completo"
      onBlur={handleNameData}/>

      <input type="text" name="email" placeholder="Tu e-mail"
      onBlur={handleEmailData}/>

      <button type="submit"> Enviar </button>

    </form>
    </div>
  );
};

export default Form;
