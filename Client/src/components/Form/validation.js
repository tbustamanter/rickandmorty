const validation = ({ email, password }, errors, setErrors) => {
  //username
  //const isEmail = ;
  if (!email) {
    setErrors({ ...errors, email: "Email no puede estar vacío" });
  } else {
    if (email.length > 35) {setErrors({...errors, email: "Email no puede ser mayor a 35 caracteres"});
    } else {
      if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
        setErrors({ ...errors, email: "Email inválido" });
      }else{
        setErrors({...errors, email: ""})
      }
    }
  }

  //password
  if(password.length <6 || password.length >10){
  setErrors({ ...errors, password: "Password debe contener al menos 6 caracteres y máximo 10" });
  }else if(!/\d/.test(password)){
        setErrors({...errors, password: "Password debe contener al menos 1 número"})
  }else{
    setErrors({...errors, password: ""})
  }
};

export default validation;
