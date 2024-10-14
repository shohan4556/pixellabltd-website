import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./pages/Navbar";
import GoTop from "./comps/GoTop";
import "./app.css";
import Footer from "./pages/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="routes">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          </Routes>
        </div>
        <GoTop />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
