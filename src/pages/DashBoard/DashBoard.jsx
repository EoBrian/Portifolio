//hooks
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useStateContext } from "../../context/StateContext"
import { useDataBase } from "../../hooks/useDataBase"
import { useNavigate } from "react-router-dom"

//components
import Error from "../../components/Error"
import Loading from "../../components/Loading"


const DashBoard = () => {
  const navigate = useNavigate()
  const {register, handleSubmit} = useForm()
  const {writeData} = useDataBase()

  const [imgArray, setImgArray] = useState(null)
  const {isLoading, error} = useStateContext()

  const onSubmit = (data)=> {

    data.imgs = imgArray.split(",")
    
    writeData(data)
    !error && navigate("/projects")
  }

  if (isLoading) {
    return <Loading/>
  }

  return (
    
    <form className="flex column" onSubmit={handleSubmit(onSubmit)}>
      {error && <Error error={error}/>}
      <label>
        Title
        <input type="text" {...register("title")} required/>
      </label>
      <label>
        Legend
        <input type="text" {...register("leg")} required/>
      </label>

      <div className="flex w-100">
        <label>
          GitHub
          <input type="text" {...register("git")} placeholder="link no github..." required />
        </label>

        <label>
          Web
          <input type="text" {...register("web")} placeholder="link da hospedagem..." />
        </label>
      </div>

      <textarea cols="20" rows="5" onChange={(e)=> setImgArray(e.target.value)} placeholder="links das imagens separadas por virgula: ex http://exemplo.com, http://exemplo2.com" />

      <input className="btn" type="submit" value="postar" />
    </form>
  )
}

export default DashBoard