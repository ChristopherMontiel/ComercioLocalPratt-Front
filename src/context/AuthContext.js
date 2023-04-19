import React, { createContext, useState } from "react";
import usersData from '../data/login.json'

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    // Leer la data de inicio de sesión desde el archivo JSON
    /*fetch('../data/login.json')
      .then(response => response.json())
      .then(data => {
        const foundUser = data.users.find(user => user.username === username && user.password === password);
        if (foundUser) {
          setAuthenticated(true);
          setUser(foundUser);
        }
      });
    */
    const userFound = usersData.find((us) => us.username === username && us.password === password);
    if (userFound) {
      console.log("se autenticó correctamente");
      setAuthenticated(true);
    }else{
      console.log("usuario y/o password incorrecto");
    }
  };

  const logout = () => {
    setAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ authenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
export default AuthProvider;