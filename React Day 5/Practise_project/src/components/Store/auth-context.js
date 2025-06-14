import React, { useState , useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogOut: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const stroredUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (stroredUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
//     localStorage.removeIuseEffect(() => {
//   //   const stroredUserLoggedInInformation = localStorage.getItem("isLoggedIn");
//   //   if (stroredUserLoggedInInformation === "1") {
//   //     setIsLoggedIn(true);
//   //   }
//   // }, []);tem("isLoggedIn");
    localStorage.removeItem("isLoggedIn")
    setIsLoggedIn(false);
 
  }

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogOut: logoutHandler,
        onLogin: loginHandler
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}


export default AuthContext
