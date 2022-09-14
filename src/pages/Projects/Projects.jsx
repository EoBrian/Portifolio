//css
import "./Projects.css"

//hooks
import { useDataBase } from "../../hooks/useDataBase"
import { useStateContext } from "../../context/StateContext"

//components
import Loading from "../../components/Loading"
import Error from "../../components/Error"


const Projects = () => {
  const {isLoading, error} = useStateContext()

  const {data} = useDataBase()

  if (isLoading) {
    return <Loading />
  }

  return (
    <ul className="flex box">
      {error && <Error error={error}/>}
      
      {
        data && data.map((d)=> (
          <li key={d.id} className="project">
            <h2 className="title">{d.title}</h2>
            <figure className="flex">
              {d.imgs && d.imgs.map(img => <img src={img} alt={d.title}/>)}
            </figure>
            
            <p className="leg">{d.leg}</p>
            <nav className="nav-bar">
              <a className="btn" href={d.git} target="_bank">GitHub</a>
              <a className="btn" href={d.web} target="_bank">Web</a>
            </nav>
            <div className="clear"></div>
          </li>
        ))
      }
    </ul>
  )
}

export default Projects