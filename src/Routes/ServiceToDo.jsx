import { useContext, useEffect } from "react";
import { Suspense } from "react";
import { AuthContext } from "../Context/AuthContext";
import ServiceToDoAllCard from "../Components/ServiceToDo/ServiceToDoAllCard";
import Loading from "../Components/loading";

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
            <Suspense fallback={<Loading></Loading>}>
                <ServiceToDoAllCard dataPromise={dataPromise}></ServiceToDoAllCard>
            </Suspense>
        </div>
    )
}

export default ServiceToDo