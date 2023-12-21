
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../src/components/Login/Login';
import Home from '../src/components/Home/Home';
import Registration from '../src/components/Register/Registration';
function App() {
 

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
