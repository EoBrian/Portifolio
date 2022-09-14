//firebase
import { database } from "../firebase/config"
import { doc, setDoc, query, collection, onSnapshot, orderBy, Timestamp } from "firebase/firestore"

//hooks
import { useId } from "./useId"
import { useStateContext } from "../context/StateContext"
import { useState, useEffect } from "react"


export const useDataBase = ()=> {
  const [cancelled, setCancelled] = useState(null)
  const [data, setData] = useState(null)
  const {setError, setIsLoading} = useStateContext()
  const { id } = useId()

  const collectionRef = collection(database, "projects")

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
      
      await setDoc(doc(collectionRef), {
        title: data.title,
        leg: data.leg,
        git: data.git,
        web: data.web,
        imgs: data.imgs,
        createdAt: Timestamp.now(),
        id
      })

    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(null)
    }
  }
  
  useEffect(()=> {
    
    const getData = async()=> {
      let q = await query(collectionRef, orderBy("createdAt", "desc"))
      await onSnapshot(q, (querySnapshot)=> setData(
        querySnapshot.docs.map((doc)=> ({id: doc.id, ...doc.data()}))
      ))
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