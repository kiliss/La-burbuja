
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from './Components/NavBar'
import Home from './pages/Home'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import WhatsAppButton from './Components/WhatsAppButton';
function App() {

  return (
    <div>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  </div>
      
  )
}

export default App
