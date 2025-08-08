import { useContext } from "react"
import { AuthContext } from "./Context/AuthContext"
import { Navigate, useLocation, useNavigate } from "react-router";

function PrivateRoute({children}) {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(user, loading);
    if(!user && loading) {
        return <div className="flex justify-center py-20"><span className="loading loading-spinner loading-xl"></span></div>
    }

    if(!user) {
        return <Navigate to = "/auth" state={location.pathname}></Navigate>
    }

    return(
        <div>
            {children}
        </div>
    )
}

export default PrivateRoute;