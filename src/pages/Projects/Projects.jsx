import Loading from "../../components/Loading"
import { useFetch } from "../../hooks/useFetch"

const url = "https://api.github.com/users/eoBrian/repos"

const Projects = () => {
  
  const {data, isLoading, error} = useFetch(url, "GET")


  if (isLoading) {
    return <Loading />
  }

  return (
    <ul>
      {
        data && data.map((e)=> (
          <li key={e.id}>
            <h2>nome:{e.name}</h2>
            <p>descrição: {e.description ? e.description : "sem descrição"}</p>
            <p>Linguagens: </p>
            <nav>
              <a className="btn" target="_blank" href={e.html_url}>GitHub</a>
            </nav>
          </li>
        ))
      }
    </ul>
  )
}

export default Projects