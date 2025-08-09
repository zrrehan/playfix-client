import { use } from "react";
import ServiceToDoCard from "./serviceToDoCard";
import nodata from "../../lotties/no_search.json"
import Lottie from "lottie-react";

function ServiceToDoAllCard({dataPromise}) {
    const data = use(dataPromise);
    console.log(data);
    return(
        <div className="py-34 h-[100vh]">
            {
                data.length > 0 ? <div>
                    {
                        data.map((singleData) => <ServiceToDoCard info={singleData}></ServiceToDoCard>)
                    }
                </div>
                    : <div className="">
                        <h1 className="text-5xl font-bold text-center text-blue-700">None Booked your Services yet!</h1>
                        <div className="flex justify-center">
                            <Lottie style={{ width: "500px" }} animationData={nodata} loop={true} />
                        </div>
                    </div>
            }
        </div>
    )
}

export default ServiceToDoAllCard;