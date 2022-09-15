//css
import './App.css'

//hoocks
import { useState } from 'react'
import { useAuthentication } from './hooks/useAuthentication'


//react-router-dom
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

//components
import MenuApp from './components/MenuApp/MenuApp'

//pages
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound'
import Projects from './pages/Projects/Projects'
import DashBoard from './pages/DashBoard/DashBoard'



function App() {

  const { user } = useAuthentication()
  
  return (
    <>
      <Router>
        <header className="menu-app">
          <MenuApp/>
        </header>

        <section className="container">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact-me' element={<Contact/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/dashboard' element={<DashBoard/>} />           
            {user && <Route path='/dashboard' element={<DashBoard/>}/>}
            <Route path='*' element={<NotFound/>}/>            
          </Routes>
        </section>
      </Router>
    </>
  )
}

export default App
