import { HashRouter as Router, Routes, Route } from "react-router-dom";
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
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavBar />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Gallery" element={<Gallery />} />
            <Route path="Faq" element={<Faq />} />
            <Route path="ContactUs" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
