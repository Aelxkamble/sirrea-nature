import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";
import Navbarcomponent from "./Components/Navbarcomponent";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Services from "./Pages/Services";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbarcomponent></Navbarcomponent>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/aboutus" element={<Aboutus></Aboutus>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/projects" element={<Projects></Projects>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
