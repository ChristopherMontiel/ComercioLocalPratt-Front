import { useRef } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


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
        <Card>
          <Card.Header as="h5">Registro</Card.Header>
          <Card.Body>
            {(authenticated) ? (
              <>
                <h1>¡ Bienvenido ! ya te encuentras logeado</h1>
                <button onClick={handleLogout}>
                  Cerrar Sesión
                </button>
              </>
            ):(
              <>
                <Card.Title> Ingresa tus datos </Card.Title>
                <form action="/" ref= { form }>
                  <Card.Text>
                    <label htmlFor = "Nombre"> Nombre </label>
                    <input type="text" name="Nombre" placeholder="Nombre" />
                    <br />
                    <label htmlFor = "Apellido"> Apellido </label>
                    <input type="text" name="Apellido" placeholder="Apellido" />
                    <br />
                    <label htmlFor = "username"> Nombre de usuario: </label>
                    <input type="text" name="username" placeholder="username" />
                    <br />
                    <label htmlFor = "password"> Contraseña: </label>
                    <input type="password" name="password" placeholder="*********" />
                    <br />
                    <label htmlFor = "passwordConfirm"> Confirmación: </label>
                    <input type="password" name="passwordConfirm" placeholder="*********" />
                    <br />
                    <label><input type="checkbox" id="cbox1" value="first_checkbox"/> Mostrar Contraseña </label>
                    <br />
                    <Button onClick={handleRegister}>
                      Registro
                    </Button>
                  </Card.Text>
                </form>
              </>
            )}
          </Card.Body>
        </Card>
      </main>
    </div>
  );
};

export default Register;