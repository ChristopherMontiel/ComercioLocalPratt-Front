import React, { useRef } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



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
    <div className="text-center mt-5">
      <main>
        <Card style={{ display: 'inline-block' }}>
          <Card.Header as="h5">Inicio de Sesión</Card.Header>
          <Card.Body className="d-flex flex-column">
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
              <Card.Text>
                <form action="/" ref= { form }>
                  <label htmlFor = "username"> Nombre de usuario: </label>
                  <input type="text" name="username" placeholder="username" />
                  <br />
                  <label htmlFor = "password"> Contraseña: </label>
                  <input type="password" name="password" placeholder="*********" />
                  <br />
                  <Button onClick={handleLogin}>
                    Iniciar Sesión
                  </Button>
                  <br />
                  <a href="/">Olvidé mi contraseña</a>
                </form>
              </Card.Text>
            </>
            )}
          </Card.Body>
        </Card>
      </main>
    </div>
  );
}

export default Login;