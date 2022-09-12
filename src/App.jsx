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
import Admin from './pages/Admin/Admin'
import DashBoard from './pages/DashBoard/DashBoard'
import Project from "./pages/Project/Project"


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
            <Route path='/projects/:id' element={<Project/>} />
            <Route path='/dashboard' element={<DashBoard/>} />
            <Route path='/admin' element={<Admin/>} />
            <Route path='*' element={<NotFound/>}/>

            {user && <Route path='/dashboard' element={<DashBoard/>}/>}
          </Routes>
        </section>
      </Router>
    </>
  )
}

export default App
