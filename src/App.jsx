
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from './Components/NavBar'
import Home from './pages/Home'

function App() {

  return (
    <div>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </div>
      
  )
}

export default App
