import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavbarExample from "./layouts/Navbar";
import "./css/main.css"
import Navbar2Example from "./layouts/Navbar2";
import HomeMc from "./pages/HomeMc";
import HomeRealState from "./pages/HomeRealState";
import HomeMarketing from "./pages/HomeMarketing";
import HomeBusinessScholl from "./pages/HomeBusinessScholl";
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavbarExample />}>
              <Route index element={<HomeMc />}/>
              <Route path="servicios/marketing" element={<HomeMarketing />}/>
              <Route path="servicios/real_state" element={<HomeRealState />}/>
              <Route path="servicios/business_scholl" element={<HomeBusinessScholl />}/>
              <Route path="*" element={<Navigate replace to="/" />}/>
            </Route>
            <Route path="servicios/real_state" element={<Navbar2Example />}>
              <Route index element={<HomeRealState />}/>
              <Route path="*" element={<Navigate replace to="/" />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
