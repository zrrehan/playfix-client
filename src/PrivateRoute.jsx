import { useContext } from "react"
import { AuthContext } from "./Context/AuthContext"
import { Navigate, useLocation, useNavigate } from "react-router";
import Loading from "./Components/loading";

function PrivateRoute({children}) {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(user, loading);
    if(!user && loading) {
        return <Loading></Loading>
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