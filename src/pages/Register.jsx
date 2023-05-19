import { useRef } from 'react';
import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import React from 'react';

const Register = () => {
  const form = useRef(null);
  const { logout, authenticated } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  
  const handleLogout = (event) => {
    logout();
  }
  
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  const handleRegister = (event) => {
    event.preventDefault();
    console.log("Registro!");
  }

  return (
    <div className="text-center mt-5">
      <main>
        <Card style={{ display: 'inline-block' }}>
          <Card.Header as="h5">Registro</Card.Header>
          <Card.Body>
            {(authenticated) ? (
              <>
                <Card.Title>¡ Bienvenido ! ya te encuentras logeado </Card.Title>
                <Card.Text>
                  <Button onClick={handleLogout} >
                    Cerrar Sesión
                  </Button>
              </Card.Text>
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
                    <input 
                      type={showPassword ? "text" : "password"}
                      name="password" 
                      placeholder="*********"
                    />
                    
                    <br />
                    <label htmlFor = "passwordConfirm"> Confirmación: </label>
                    <input 
                      type={showPassword ? "text" : "password"}
                      name="passwordConfirm"
                      placeholder="*********"
                    />
                    
                    <br />
                    <label>
                      <input 
                        type="checkbox" 
                        id="cbox1" 
                        value="first_checkbox"
                        onChange={toggleShowPassword}
                      /> 
                      Mostrar Contraseña 
                    </label>
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