import { useSelector } from "react-redux"
import { useRouter } from "next/router"
import { useEffect } from "react"
import Header from "../components/Header"
export default function Client(){
    const {user} = useSelector((state)=> state.reducer)
    const router = useRouter()
    useEffect(() => {
      if(user?.typeUser !== 0){
        router.push('/')
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return(
        <>
        <Header/>
        <h1>Hola soy un cliente</h1>
        </>
    )
}