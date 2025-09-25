import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import Bridge from './pages/Bridge';
import CodeInput from "./components/CodeInput";


function App() {
  const [count, setCount] = useState(0)

  return (
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Bridge" element={<Bridge />}/>
      </Routes>
  )
}

export default App
