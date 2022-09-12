import { database } from "../firebase/config"
import { ref, set } from "firebase/database"

export const useDataBase = ()=> {

  const writeData = async (data)=> {
    try {
      
      await set(ref(database, `project/${data.id}`), {
        title: data.title,
        legend: data.legend,
        pics: data.pics,
        links: data.links
      })

    } catch (error) {
      console.log(error.message)
    }
  }

  return {
    writeData
  }
}