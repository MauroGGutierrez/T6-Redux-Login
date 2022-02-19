import React from 'react'
import { Link } from 'react-router-dom';
import "./RegisterUser.css"

const RegisterUser = () => {
    return (
    <div className='login-container'>
      <div className='login-main'>
        <h1>Registrar Usuario</h1>
        <form className='myform'>
          <input type="text" placeholder='Nombre Completo' className='input-login'/>
          <input type="text" placeholder='Correo' className='input-login'/>
          <input type="password" placeholder='Contraseña' className='input-login'/>
          <input type="password" placeholder='Repetir Contraseña' className='input-login'/>
          <button className='btn-login' type='submit'>Registrarse</button>
        </form>
        <Link to={"/"} className="txt-register">¿Ya tenes cuenta? Logearse</Link>
      </div>
    </div>
  )
};

export default RegisterUser