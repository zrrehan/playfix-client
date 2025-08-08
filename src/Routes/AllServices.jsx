import { Suspense, useEffect } from "react";
import Services from "../Components/AllServices/Services";

function AllServices() {
    const dataPromise = fetch("https://playfix-teal.vercel.app/").then((res) => res.json());
    useEffect(() => {
            document.querySelector("title").innerText = "All Services"
        }, [])
    return(
        <div>
            
            <Suspense fallback={<div className="flex justify-center py-20"><span className="loading loading-spinner loading-xl"></span></div>}>
                <Services dataPromise={dataPromise}></Services>
            </Suspense>
        </div>
    )
}

export default AllServices;