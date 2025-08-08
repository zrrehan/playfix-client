import axios from "axios";
import { Suspense, useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import SingleManageService from "../Components/ManageService/SingleManageService";
// import { Suspense } from "react";

function ManageService() {
    const {user} = useContext(AuthContext);
    if(!user) {
        return <div></div>
    }
    useEffect(() => {
        document.querySelector("title").innerText = "Manage Service"
    }, [])
    const fetchOptions = {
        headers: {
            authorization: `Bearer ${user.accessToken}`
        }
    } 
    const dataPromise = fetch(`https://playfix-teal.vercel.app/manage-service?email=${user.email}`, fetchOptions)
        .then(res => res.json());
    
    return(
        <div className="h-[100vh]">
            <Suspense fallback={<div className="flex justify-center py-20"><span className="loading loading-spinner loading-xl"></span></div>}>
                <SingleManageService dataPromise={dataPromise}></SingleManageService>
            </Suspense>
        </div>
    )
}

export default ManageService;