import { useContext, useEffect } from "react";
import { Suspense } from "react";
import { AuthContext } from "../Context/AuthContext";
import ServiceToDoAllCard from "../Components/ServiceToDo/ServiceToDoAllCard";

function ServiceToDo() {
    const {user} = useContext(AuthContext);
    useEffect(() => {
        document.querySelector("title").innerText = "Service To Do"
    }, [])
        const fetchOptions = {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        }
    const dataPromise = fetch(`https://playfix-teal.vercel.app/service-to-do?email=${user.email}`, fetchOptions)
            .then(res => res.json());
    return(
        <div className="h-[100vh]">
            <Suspense fallback={<div className="flex justify-center py-20"><span className="loading loading-spinner loading-xl"></span></div>}>
                <ServiceToDoAllCard dataPromise={dataPromise}></ServiceToDoAllCard>
            </Suspense>
        </div>
    )
}

export default ServiceToDo