import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { userLogin } from '../redux/actions/userActions'
import "./LoginUser.css"

const LoginUser = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userLogin(values.email, values.password));
  };


  return (
    <div className='login-container'>
      <div className='login-main'>
        <h1>Bienvenido</h1>
        <form className='myform' onSubmit={submitHandler}>
          <input type="text" placeholder='Email' className='input-login' value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })}/>
          <input type="password" placeholder='Password' className='input-login' value={values.password}
          onChange={(e) => setValues({ ...values, password: e.target.value })}/>
          <button className='btn-login' type='submit'>Login</button>
        </form>
        <a href='#' className='txt-a'>¿Olvidaste tu contraseña?</a>
        {/* <a href='#' className='txt-b'>¿No tenes cuenta? Registrate</a> */}
          <Link to={"/register"} className="txt-b">¿No tenes cuenta? Registrarse</Link>
      </div>
    </div>
  )
}

export default LoginUser