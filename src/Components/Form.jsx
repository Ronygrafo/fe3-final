import React from "react";
import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [leadData, setLeadData] = useState({
    name: {value: "", isOK: null},
    email: {value: "", isOK: null},
  });

  function checkInputsData() {
    if (leadData.name.isOK === null  || leadData.email.isOK === null) {
      return undefined
    }

    if (leadData.name.isOK === true  && leadData.email.isOK === true) {
      return true
    }
    
    else { return false; }

  }

  const errMessage = {
    errName: "Tu Nombre Completo es muy corto!, porfa verificalo",
    errEmail: "Porfa, danos tu Email correcto 🙂",
  }
  const successMessage = `Gracias ${leadData.name.value}, pronto te escribimos!`

  const handleNameData = (e) =>{
    // Validar NOMBRE con longitud mayor a 5 y sin espacio en blanco al iniciar

    if (e.target.value.length > 5 && (e.target.value.charAt(0) !== " ")){
      setLeadData({
        ...leadData,
        name: {value: e.target.value, isOK: true}})
    } else {
      setLeadData({
        ...leadData,
        name: {value: "", isOK: false}})
    }
  }

  const handleEmailData = (e) =>{
    // Validar EMAIL válido con REGEX
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (regex.test(e.target.value)){
      setLeadData({
        ...leadData,
        email: {value: e.target.value, isOK: true}})
    } else {
      setLeadData({
        ...leadData,
        email: {value: "", isOK: false}})
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(leadData.name.isOK);
    console.log(leadData.email.isOK);
    console.log("-");

    //checkInputs() ? console.log("Hay errores") : console.log(`LEAD RECIBIDO: \n Nombre: ${leadData.name.value} \n Email: ${leadData.email.value} \n ========================`)

    //(checkInputs())? console.log("Hay errores") : console.log(`LEAD RECIBIDO: \n Nombre: ${leadData.name.value} \n Email: ${leadData.email.value} \n ========================`);

/*     if (leadData.name.error === true || leadData.name.error === true) {
      console.log("Hay errores")
    } else{
      //console.log(`LEAD RECIBIDO: \n Nombre: ${leadData.name} \n Email: ${leadData.email} \n ========================`);
      console.log(leadData)
     } */
  }

  return (
    <>
    <div className="contactForm">
    <form onSubmit={handleSubmit}>

      <input type="text" name="name" placeholder="Nombre completo"
      onChange={handleNameData}/>

      {leadData.name.isOK ? <></> :  <p className="warning" >{errMessage.errName}</p>}
      

      <input type="text" name="email" placeholder="Tu e-mail"
      onChange={handleEmailData}/>

      {leadData.email.isOK ? <></> :  <p className="warning">{errMessage.errEmail}</p>}

      <button type="submit"> Enviar </button>
      {checkInputsData() ? <p className="success">{successMessage}</p> : <></>}

    </form>
    </div>

    </>
  );
};

export default Form;
