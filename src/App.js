import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Proyectos from "./components/Proyectos";
import NavbarExample from "./layouts/Navbar";
import "./css/main.css"
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavbarExample />}>
              <Route index element={<Home />}/>
              <Route path="proyectos" element={<Proyectos />}/>
              <Route path="*" element={<Navigate replace to="/" />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
