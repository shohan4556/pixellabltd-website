import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./pages/Navbar";
import GoTop from "./comps/GoTop";
import "./app.css";
import Footer from "./pages/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
// import Blogs from "./pages/BlogsPage/Blogs";
import Blogs from "./pages/BlogsPage/Blogs";
import BlogPost from "./pages/BlogsPage/BlogPost";

function App() {
  return (
    <div>
      {/* use HashRouter if navigation doesn't work */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogPost />} />
        </Routes>
        <GoTop />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
