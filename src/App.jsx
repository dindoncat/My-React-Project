import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./componence/NavBar"
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import Faq from "./pages/Faq";
import "./index.css";
import Footer from "./componence/Footer";



function App() {


  return (
    <BrowserRouter>
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/My-React_Project" element={<Home />} />
          <Route path="My-React_Project/About" element={<About />} />
          <Route path="My-React_Project/Gallery" element={<Gallery />} />
          <Route path="My-React_Project/Faq" element={<Faq />} />
          <Route path="My-React_Project/ContactUs" element={<ContactUs />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
  )
}

export default App
