//css
import "./MenuApp.css"
import {Link, NavLink} from "react-router-dom"
import { useAuthentication } from "../../hooks/useAuthentication"
import { useState } from "react"

//icon's
import IconMenu from "../../assets/menu.svg"
import CloseMenu from "../../assets/close.svg"

const MenuApp = () => {
  const [menu, setMenu] = useState(true)
  const {user} = useAuthentication()

  return (
    <>
     {/* colapse menu */}
     <div 
        className="menu-button"
        onClick={()=> menu? setMenu(false) : setMenu(true)}>

        <img width={30} src={menu ? IconMenu : CloseMenu} alt="icone menu" />
      </div>
      <div>
        <Link className="logo" to="/">Portifólio</Link>
      </div>
      <nav className={menu ? "toggle-menu": undefined}>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/projects">Projetos</NavLink></li>
          <li><NavLink to="/contact-me">Contato</NavLink></li>
          {user && <li><NavLink to="/DashBoard">DashBoard</NavLink></li>}
        </ul>
      </nav> 
      <div className="clear"></div>
      
    </>
  )
}

export default MenuApp