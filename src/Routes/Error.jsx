import { useEffect } from "react";
import { Link } from "react-router";

function Error() {
    useEffect(() => {
        document.querySelector("title").innerText = "Error 404"
    }, [])
    return(
        <div className="h-[100vh] flex items-center">
            <div className="flex w-[100%] flex-col items-center gap-4">
                <h1 className="text-5xl font-bold italic">Are you Lost??</h1>
                <Link to = "/"><button className="btn btn-primary rounded-3xl">Go back to home</button></Link>
            </div>
        </div>
    )
}

export default Error;