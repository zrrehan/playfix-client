import { use } from "react"
import BookedServiceCard from "./BookedServiceCard";
import nodata from "../../lotties/no_search.json"
import Lottie from "lottie-react";

function AllBookedService({dataPromise}) {
    const data = use(dataPromise);
    console.log(data);
    return(
        <div className="py-26 h-[100vh]">
            {
                data.length > 0 ? <div>
                    {
                        data.map((singleData) => <BookedServiceCard info={singleData}></BookedServiceCard>)
                    }
                </div>
                : <div className="">
                        <h1 className="text-5xl font-bold text-center text-blue-700">You didn't Book any Service Yet</h1>
                        <div className="flex justify-center">
                            <Lottie style={{ width: "500px" }} animationData={nodata} loop={true} />
                        </div>
                </div>
            }
        </div>
    )
}

export default AllBookedService;