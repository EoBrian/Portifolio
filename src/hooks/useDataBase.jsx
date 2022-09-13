import { database } from "../firebase/config"
import { ref, set } from "firebase/database"

import { useId } from "./useId"
import { useStateContext } from "../context/StateContext"

export const useDataBase = ()=> {

  const {setError, setIsLoading} = useStateContext()

  const { id } = useId()

  const writeData = async (data)=> {
    setError(null)
    setIsLoading(true)

    try {
      
      await set(ref(database, `projects/${id}`), {
        title: data.title,
        leg: data.leg,
        git: data.git,
        web: data.web,
        imgs: data.imgs,
        id
      })

    } catch (error) {
      setError("Preencha corretamente o formulário!")
    } finally {
      setIsLoading(null)
    }
  }

  return {
    writeData
  }
}