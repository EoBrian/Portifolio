//firebase
import { database } from "../firebase/config"
import { ref, set, get, child, } from "firebase/database"

//hooks
import { useId } from "./useId"
import { useStateContext } from "../context/StateContext"
import { useState, useEffect } from "react"


export const useDataBase = ()=> {
  const [cancelled, setCancelled] = useState(null)
  const [data, setData] = useState(null)
  const {setError, setIsLoading} = useStateContext()
  const { id } = useId()


  function checkIfIsCancelled(){
    if(!cancelled) {
      return
    }
  }

  const writeData = async (data)=> {
    checkIfIsCancelled()
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

  useEffect(()=> {
    
    const getData = async ()=> {
      checkIfIsCancelled()
      setError(null)
      setIsLoading(true)
  
      const dbRef = ref(database)
      await get(child(dbRef, "projects")).then((snapshot)=> {
        if(snapshot.exists()) {
          
          setData(
            snapshot.val()
          )

        }else {
          setError("Nenhum dado encontrado!")
        }
      }).catch((error)=> setError(error.message))
  
      setIsLoading(null)
    }

    getData()

  },[])

  
  useEffect(()=> {
    setCancelled(true)
  },[])

  return {
    writeData,
    data
  }
}