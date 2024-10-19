import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./pages/Navbar";
import GoTop from "./comps/GoTop";
import "./app.css";
import Footer from "./pages/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
        <GoTop />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
