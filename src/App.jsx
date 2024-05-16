import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import Update from './pages/Update'
Update

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/create' element={<Create/>}  />
           <Route path='/update/:id' element={<Update/>}    />
        </Routes>
      </BrowserRouter>     
    </>
  )
}

export default App
