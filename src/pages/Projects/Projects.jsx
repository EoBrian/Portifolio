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
    <ul>
      {error && <Error error={error}/>}
      
      <div>
        <button onClick={()=> navigate("/admin")}>Admin</button>
      </div>
    </ul>
  )
}

export default Projects