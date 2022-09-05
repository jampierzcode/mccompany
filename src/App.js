import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavbarExample from "./layouts/Navbar";
import "./css/main.css";
import Navbar2Example from "./layouts/Navbar2";
import Navbar3Example from "./layouts/Navbar3";
import HomeMc from "./pages/HomeMc";
import HomeRealState from "./pages/HomeRealState";
import HomeMarketing from "./pages/HomeMarketing";
import HomeBusinessScholl from "./pages/HomeBusinessScholl";
import Propiedad from "./components/HomeRealState/Propiedad";
import Wrapper from "./layouts/Wrapper";
import HomeCrea from "./pages/HomeCrea";
import Portafolio from "./components/HomeMc/Portafolio";
import Blog from "./components/HomeMc/Blog";
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
        <Wrapper/>
          <Routes>
            <Route path="/" element={<NavbarExample />}>
              <Route index element={<HomeMc />} />              
            </Route>
            <Route path="servicios/marketing" element={<HomeMarketing />} />
            <Route path="servicios/real_state" element={<Navbar2Example />}>
              <Route index element={<HomeRealState />} />
              <Route path="property/casas/:titleCasa" element={<Propiedad />} />
              <Route path="property/proyectos/:titleCasa" element={<Propiedad />} />
              <Route path="*" element={<Navigate replace to="/" />} />
            </Route>
            <Route path="servicios/crea" element={<Navbar3Example />}>
              <Route index element={<HomeCrea />} />
              <Route path="portafolio" element={<Portafolio />} />
              <Route path="blog" element={<Blog />} />
            </Route>
            <Route
              path="servicios/business_scholl"
              element={<HomeBusinessScholl />}
            />  
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
