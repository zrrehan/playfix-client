import gaming from "../../lotties/gaming1.json"
import Lottie from "lottie-react";

function SecondBanner() {
    return(
        <div className="bg-linear-to-t from-[#082c64] py-20 px-10 lg:py-30 to-indigo-500 text-white flex flex-col-reverse lg:flex-row-reverse lg:px-44 justify-between items-center">
            <div className="lg:w-[550px] space-y-6">
                <h1 className="text-5xl  text-center header-font">
                    Your Console, Our Care
                </h1>
                <div className = "divider"></div>
                <p className="text-3xl">You focus on the game — we’ll handle every console problem. Fast, reliable repairs for your PS4 & PS5, so you play at ease.</p>
            </div>
            <Lottie className="md:w-[500px]" animationData={gaming} loop={true} />
        </div>
    )
}

export default SecondBanner;