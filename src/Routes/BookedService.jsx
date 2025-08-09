import { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Suspense } from "react";
import AllBookedService from "../Components/BookedService/AllBookedService";
import Loading from "../Components/loading";

function BookedService() {
    const {user} = useContext(AuthContext);
    useEffect(() => {
        document.querySelector("title").innerText = "Booked Service"
    }, [])
    const fetchOptions = {
        headers: {
            authorization: `Bearer ${user.accessToken}`
        }
    }
    const dataPromise = fetch(`https://playfix-teal.vercel.app/booked-service?email=${user.email}`, fetchOptions)
        .then(res => res.json());

    return(
        <div className="h-[100vh]">
            <Suspense fallback={<Loading></Loading>}>
                <AllBookedService dataPromise={dataPromise} ></AllBookedService>
            </Suspense>
        </div>
    )
}

export default BookedService;