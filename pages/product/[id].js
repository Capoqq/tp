import { useRouter } from "next/router"
export default function ProductItem(){
    const router = useRouter();
    const handleClick = () =>{
        router.push('/client')
    }

    return(
        <div>
            <h1>
                Esta es la pagina de un producto en especifico: {router.query.id}
            </h1>
        <button onClick={handleClick} className="btn btn-primary">
            prueba de redireccion
        </button>
        </div>
    )
}