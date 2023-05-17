import { useRef } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

import React from 'react';

const Register = () => {
  const form = useRef(null);
  const { logout, authenticated } = useContext(AuthContext);
  const handleLogout = (event) => {
    logout();
  }
  const handleRegister = (event) => {
    event.preventDefault();
    console.log("Registro!");
  }
  return (
    <div>
      <main>
        {(authenticated) ? (
          <>
            <h1>¡ Bienvenido ! ya te encuentras logeado</h1>
            <button onClick={handleLogout}>
              Logout
            </button>
          </>
        ):(
          <>
            <h1> Registro: </h1>
            <form action="/" ref= { form }>
              <label htmlFor = "Nombre"> Nombre </label>
              <input type="text" name="Nombre" placeholder="Nombre" />

              <label htmlFor = "Apellido"> Apellido </label>
              <input type="text" name="Apellido" placeholder="Apellido" />

              <label htmlFor = "username"> Nombre de usuario: </label>
              <input type="text" name="username" placeholder="username" />
              
              <label htmlFor = "password"> Contraseña: </label>
              <input type="password" name="password" placeholder="*********" />
              
              <label htmlFor = "passwordConfirm"> Confirmación: </label>
              <input type="password" name="passwordConfirm" placeholder="*********" />

              <label><input type="checkbox" id="cbox1" value="first_checkbox"/> Mostrar Contraseña </label>

              <button onClick={handleRegister}>
                Registro
              </button>
            </form>
          </>
        )}
      </main>
    </div>
  );
};

export default Register;