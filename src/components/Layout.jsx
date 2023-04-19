import React from 'react';
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1> Layout </h1>
      <nav>
        <ul>
          <li>
            <Link to="/home"> Home </Link>  
          </li>
          <li>
            <Link to="/login"> Login </Link>  
          </li>
          <li>
            <Link to="/register"> Register </Link>  
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default Layout;