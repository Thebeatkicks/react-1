import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Contact from "./pages/contact.jsx";
import Portfoliopage from "./pages/portfoliopage.jsx";
import Navbar from "./Navbar.jsx";

function App() {
return ( 
<>
<BrowserRouter>
<Navbar></Navbar>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/portfolio" element={<Portfoliopage />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</BrowserRouter>
</>
);
}
 
export default App;
