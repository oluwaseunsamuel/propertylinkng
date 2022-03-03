import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Viewestate from "./pages/Viewestate";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="viewestate" element={<Viewestate />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
