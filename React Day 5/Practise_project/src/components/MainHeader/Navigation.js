import React, { useContext } from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../Store/auth-context";

const Navigation = (props) => {
  const ctx = useContext(AuthContext)
  return (
    
        <nav className={classes.nav}>
        <ul>
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Users</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Admin</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <button onClick={ctx.onLogOut}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
       
    
  );
};

export default Navigation;
