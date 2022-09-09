//css
import './App.css'

//hoocks
import { useState } from 'react'

//react-router-dom
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

//components
import MenuApp from './components/MenuApp'

//pages
import Home from './pages/Home'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'


function App() {


  return (
    <>
      <Router>
        <header className="menu-app">
          <MenuApp/>
        </header>

        <article className="container">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact-me' element={<Contact/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </article>
      </Router>
    </>
  )
}

export default App
