//css
import styles from "./MenuApp.css"

import {Link, NavLink} from "react-router-dom"

const MenuApp = () => {
  return (
    <>
      <div>
        <Link className="logo" to="/">Portifólio</Link>
        <input type="checkbox" />
      </div>
      <nav>
        <ul className="flex">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/projects">Projetos</NavLink></li>
          <li><NavLink to="/contact-me">Contato</NavLink></li>
        </ul>
      </nav>
    </>
  )
}

export default MenuApp