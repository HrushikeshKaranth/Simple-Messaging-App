import { routes, protectedRoutes } from "./routes/router";
import { Routes, Route, useNavigate } from 'react-router-dom';
import './assets/css/app.css'
import { AuthContext } from "./helpers/context";
import { useEffect, useState } from "react";
//-----
function App() {
  // navigation
  let navigate = useNavigate()

  //states 
  const [login, setLogin] = useState({
    auth: false,
    token: '',
  })

  // useeffects
  useEffect(() => {
    // checking if User is authorized, if yes, then giving access.
    if (localStorage.getItem('auth')) {
      setLogin({ ...login, auth: true, token: localStorage.getItem('auth') })
      navigate('/welcome');
      console.log('Logged in');
    }
    else { console.error('Need to Login again'); }

  }, [])

  //logs
  console.log(login);
  //-----
  return (
    <div className="app">
      <AuthContext.Provider value={[login, setLogin]}>
        <Routes>
          {/* mapping all the routes */}
          {routes.map((route) => {
            return <Route key={route.id} path={route.path} element={route.element} />
          })}

          {/* mapping all the protected routes only if logged in  */}
          {login.auth && protectedRoutes.map((route) => {
            return <Route key={route.id} path={route.path} element={route.element} />
          })}
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
