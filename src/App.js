import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Comparative from './Components/ComparativeStudy/Comparative';
import Service from './Components/Services/Service';
import Product from './Components/Product/Product';
import Companyprofile from './Components/Companyprofile/Companyprofile';
import Contact from './Components/Contact/Contact';
import Gallery from './Components/Gallery/Gallery';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ paddingTop: '10px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comparative-study" element={<Comparative />} />
          <Route path="/services" element={<Service />} />
          <Route path="/products" element={<Product />} />
          <Route path="/company-profile" element={<Companyprofile />} />
          <Route path="/reachout" element={<Contact/>} />
          <Route path="/gallery" element={< Gallery />} />
 

         
        </Routes>
      </main>
      <Footer />
       <ToastContainer />
    </Router>
  );
}

export default App;
