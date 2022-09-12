import { useState } from "react"
import { useAuthentication } from "../../hooks/useAuthentication"

import Loading from "../../components/Loading"
import Error from "../../components/Error"


const Admin = () => {
  const {setAuth, error, isLoading} = useAuthentication()
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const handleSubmit = (e)=> {
    e.preventDefault()
    
    setAuth(email, password)
  }

  isLoading && <Loading/>

  return (
    <form onSubmit={handleSubmit} className="flex column">
      {error && <Error error={error}/>}
      <label>
        E-mail
        <input type="email" onChange={(e)=> setEmail(e.target.value)} />
      </label>
      <label>
        Password
        <input type="password" onChange={(e)=> setPassword(e.target.value)} />
      </label>
      <input className="btn" type="submit" value="enviar" />
    </form>
  )
}

export default Admin