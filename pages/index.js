import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../redux/action"
export default function Login(){
    const dispatch = useDispatch()
    const [formulario, setFormulario] = useState({
        userName:'',
        password:''
    })
    const handleChange = (e) =>{
        setFormulario({
            ...formulario,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = async () => {
        if(formulario.userName == '' && formulario.password == ''){
            alert('error')
            return
        }
        dispatch(login(formulario))
      
    }
    return(
        <div className="d-flex flex-column">
            <input type="text" name="userName" onChange={handleChange} />
            <input type="text" name="password" onChange={handleChange} />
            <button onClick={handleSubmit} className="btn btn-primary">
              Send
            </button>
        </div>
    )
}