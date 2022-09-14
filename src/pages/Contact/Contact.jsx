import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useDataBase } from "../../hooks/useDataBase"

const Contact = () => {
  const navigate = useNavigate()
  const {writeData} = useDataBase("contact")
  const {register, handleSubmit} = useForm()

  const onSubmit = (data)=> {
    writeData(data)
    navigate("/")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex column">
      <label>
        Name
        <input type="text" placeholder="digite seu nome..." required {...register("name")} />
      </label>
      <label>
        email
        <input type="email" placeholder="digite seu email..." required {...register("email")}/>
      </label>
      <label htmlFor="message">Mensagem</label>
      <textarea id="message" rows={10} type="text" placeholder="deixe sua menssagem..." required {...register("message")}/>
      <input className="btn" type="submit" value="enviar" />
    </form>
  )
}

export default Contact