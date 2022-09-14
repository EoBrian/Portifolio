//css
import "./Projects.css"

//hooks
import { useDataBase } from "../../hooks/useDataBase"
import { useNavigate } from "react-router-dom"
import { useStateContext } from "../../context/StateContext"

//components
import Loading from "../../components/Loading"
import Error from "../../components/Error"


const Projects = () => {
  const {isLoading, error} = useStateContext()
  const navigate = useNavigate()
  const {data} = useDataBase()

  console.log(data)

  if (isLoading) {
    return <Loading />
  }

  return (
    <ul className="flex">
      {error && <Error error={error}/>}
      
      {
        data && data.map((d)=> (
          <li key={d.id} className="project">
            <h2 className="title">{d.title}</h2>
            <figure className="flex">
              {d.imgs && d.imgs.map(img => <img src={img} width="100%" alt={d.title}/>)}
            </figure>
            
            <p className="leg">{d.leg}</p>
            <nav className="nav-bar">
              <a href={d.git} target="_bank">GitHub</a>
              <a href={d.web} target="_bank">Web</a>
            </nav>
          </li>
        ))
      }

      <div>
        <button onClick={()=> navigate("/admin")}>Admin</button>
      </div>
    </ul>
  )
}

export default Projects