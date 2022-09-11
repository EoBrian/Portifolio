import { useFetch } from "../../hooks/useFetch"

const Projects = () => {

  const url = "https://api.github.com/users/eoBrian/repos"
  const {data} = useFetch(url, "GET")

  console.log(data)

  return (
    <div>Projects</div>
  )
}

export default Projects