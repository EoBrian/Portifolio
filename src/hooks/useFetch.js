import { useState, useEffect } from "react";
import axios from "axios";


export const useFetch = async (url, state)=> {

  const [isLoading, setIsLoading] = useState(null)
  const [error, setError] = useState(null)
  const [data, setData] = useState(new Array())


  useEffect(()=> {
   
    async function getData(){

      setError(null)
      setIsLoading(true)
  

      try {

        if (state === "GET") {
          await axios.get(url)
            .then( response => console.log(response.data))
        }
  
      } catch (error) {
  
        console.log(error.message)
        console.log(typeof error)
  
      } finally {
  
        setIsLoading(null)
  
      }
    }

    getData()

  },[url, state])


  return {
    data,
    error,
    isLoading
  }
}