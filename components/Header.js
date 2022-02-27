import { Button } from "@material-ui/core"
import { useDispatch } from "react-redux"
import { logout } from "../redux/action"

const Header = () =>{
    const dispatch = useDispatch()
    const logOut = () =>{
        dispatch(logout())
    }
    return (
        <div className="w-100 d-flex justify-content-end bg-black py-2 pe-3">
            <Button onClick={logOut} variant="contained" color="primary">
                Logout
            </Button>
        </div>
    )
}
export default Header