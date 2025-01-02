import { Route, Routes, Navigate } from "react-router-dom";
import Aboutus from "./Components/Aboutus";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";
import Nextpage from "./Components/Nextpage";
import Third from "./Components/Third";
import Whatwedo from "./Components/Whatwedo";
import ContactUS from "./Components/ContactUS";
import Services from "../src/Components/Services";
import Contact from "./Components/Contact";
function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<ContactUS />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
