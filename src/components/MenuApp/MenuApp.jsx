//css
import "./MenuApp.css"
import {Link, NavLink} from "react-router-dom"
import { useAuthentication } from "../../hooks/useAuthentication"

const MenuApp = () => {

  const {user} = useAuthentication()

  return (
    <>
      <div>
        <Link className="logo" to="/">Portifólio</Link>
      </div>
      <nav>
        <ul className="flex">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/projects">Projetos</NavLink></li>
          <li><NavLink to="/contact-me">Contato</NavLink></li>
          {user && <li><NavLink to="/DashBoard">DashBoard</NavLink></li>}
        </ul>
      </nav>
    </>
  )
}

export default MenuApp