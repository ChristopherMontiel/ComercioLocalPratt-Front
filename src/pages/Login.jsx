import React, { useRef } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const form = useRef(null);
  const { login, logout, authenticated } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);

    const username = formData.get('username');
    const password = formData.get('password');
  
    console.log("username: ", username);
    console.log("password: ", password);

    login(username, password);
  }

  const handleLogout = (event) => {
    logout();
  }

  return (
    <div>
      <main>
        {(authenticated) ? (
          <>
            <h1>¡ Bienvenido ! ya te encuentras logeado</h1>
            <button onClick={handleLogout} >
              Cerrar Sesión
            </button>
          </>
        ):(
          <>
            <h1>Iniciar Sesión</h1>
            <form action="/" ref= { form }>
              <label htmlFor = "username"> Nombre de usuario: </label>
              <input type="text" name="username" placeholder="username" />
              
              <label htmlFor = "password"> Contraseña: </label>
              <input type="password" name="password" placeholder="*********" />
              
              <button onClick={handleLogin}>
                Iniciar Sesión
              </button>  
              <a href="/">Olvidé mi Contraseña</a>
            </form>
          </>
        )}
      </main>
    </div>
  );
}

export default Login;