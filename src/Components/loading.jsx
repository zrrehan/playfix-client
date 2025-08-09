import Lottie from "lottie-react"
import loading from "../lotties/loading.json"
function Loading() {
    return(
        <div className="flex justify-center items-center min-h-[90vh]">
            <Lottie style={{ width: "500px" }} animationData={loading} loop={true} />
        </div>
    )
}

export default Loading