import React from "react";
import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [leadData, setLeadData] = useState({
    name: "",
    email: "",
  });

  const [show, setShow] = useState(false)

  const errMessage = {
    errName: "Tu nombre no es válido, por favor verificalo",
    errEmail: "Porfa, danos tu Email correcto 🙂",
  }

  const handleNameData = (e) =>{
    // Validar NOMBRE con longitud mayor a 5 y sin Espacio en blanco al iniciar

    // console.log(e.target.value.length > 5 && (e.target.value.charAt(0) !== " "));
    if (e.target.value.length > 5 && (e.target.value.charAt(0) !== " ")){
      setLeadData({
        ...leadData,
        name: e.target.value})
    } else {
      console.log(errMessage.errName);
    }
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
    }else {
      console.log(errMessage.errEmail);
    }
    //console.log(leadData);
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`LEAD RECIBIDO: \n Nombre: ${leadData.name} \n Email: ${leadData.email} \n ========================`);
  }

  return (
    <>
    <div>
    <form onSubmit={handleSubmit}>

      <input type="text" name="name" placeholder="Nombre completo"
      onChange={handleNameData}/>

      <input type="text" name="email" placeholder="Tu e-mail"
      onChange={handleEmailData}/>

      <button type="submit"> Enviar </button>

    </form>
    </div>
    <p>
      Mensaje output Aqui
    </p>
    </>
  );
};

export default Form;
