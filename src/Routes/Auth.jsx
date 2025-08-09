import { useEffect } from "react";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import Lottie from "lottie-react";
import loginLottie from "../lotties/Login.json"

function Auth() {
    useEffect(() => {
            document.querySelector("title").innerText = "Login or Registration"
        }, [])
    return(
        <div className="py-56 px-40 flex justify-start ">
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift w-[500px] mx-auto">
                <input type="radio" name="my_tabs_3" className="tab" aria-label="Login" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <Login></Login>
                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label="Register" />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <Register></Register>
                </div>
            </div>
            <Lottie className="hidden md:flex" animationData={loginLottie} loop={true} />
        </div>
    )
}

export default Auth;