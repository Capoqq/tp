import { useDispatch } from "react-redux"
import { logout } from "../redux/action"

const Header = () =>{
    const dispatch = useDispatch()
    const logOut = () =>{
        dispatch(logout())
    }
    return (
        <div className="w-100">
            <button onClick={logOut} className="btn btn-danger">
                Logout
            </button>
        </div>
    )
}
export default Header