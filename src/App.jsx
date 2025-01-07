import { Route, Routes } from "react-router-dom";
import Aboutus from "./Components/Aboutus";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";
import Nextpage from "./Components/Nextpage";
import Third from "./Components/Third";
import Whatwedo from "./Components/Whatwedo";
import ContactUS from "./Components/ContactUS";
import Services from "../src/Components/Services";
import Contact from "./Components/Contact";
import ScrollToTop from "./Components/ScrollToTop";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="">
      <ToastContainer />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Contactus" element={<ContactUS />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
