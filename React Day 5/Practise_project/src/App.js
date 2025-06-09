import React, { useContext, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/Store/auth-context";
function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // used to avoid infinite loop we used useEffect() hook
  // useEffect(() => {
  //   const stroredUserLoggedInInformation = localStorage.getItem("isLoggedIn");
  //   if (stroredUserLoggedInInformation === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem('isLoggedIn');
  //   setIsLoggedIn(false);
  // };


  const ctx = useContext(AuthContext)
  return (
  <React.Fragment>

      <MainHeader   />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
  </React.Fragment>
      
   
  );
}

export default App;
