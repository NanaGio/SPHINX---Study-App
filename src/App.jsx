import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import Bridge from './pages/Bridge';
import Study from "./pages/Study";
import CodeInput from "./components/CodeInput";


function App() {
  const [count, setCount] = useState(0)

  return (
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Bridge" element={<Bridge />}/>
        <Route path="/Study" element={<Study/>}/>
      </Routes>
  )
}

export default App
