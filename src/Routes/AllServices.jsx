import { Suspense, useEffect } from "react";
import Services from "../Components/AllServices/Services";
import Loading from "../Components/loading";

function AllServices() {
    const dataPromise = fetch("https://playfix-teal.vercel.app/").then((res) => res.json());
    useEffect(() => {
            document.querySelector("title").innerText = "All Services"
        }, [])
    return(
        <div>
            
            <Suspense fallback={<Loading></Loading>}>
                <Services dataPromise={dataPromise}></Services>
            </Suspense>
        </div>
    )
}

export default AllServices;