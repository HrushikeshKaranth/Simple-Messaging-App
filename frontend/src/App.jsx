import { routes } from "./routes/allRoutes";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/app.css'
//-----
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {routes.map((route) => {
            return <Route key={route.id} path={route.path} element={route.element} />
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
