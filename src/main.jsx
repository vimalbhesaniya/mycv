import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './components/about.jsx'
import './index.scss'
import { BrowserRouter, Navigate, Route, Routes  } from "react-router-dom"
import Home from './components/home.jsx'
import Contect from './components/contect.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<App/>} >
          <Route  path='/home' element={<Home />}></Route>
          <Route  path='/about' element={<About />}></Route>
          <Route  path='/contect' element={<Contect />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
