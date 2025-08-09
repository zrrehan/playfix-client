import { use } from "react"
import ManageServiceCard from "./ManageServiceCard";
import nodata from "../../lotties/no_search.json"
import Lottie from "lottie-react";

function SingleManageService({dataPromise}) {
    const data = use(dataPromise);
    console.log(data);
    return(
        <div className="py-20">
            {
                data.length > 0 ? <>{
                    data.map((singleData) => <ManageServiceCard key={singleData._id} info={singleData}></ManageServiceCard>)
                }</>:
                    <div className="">
                        <h1 className="text-5xl font-bold text-center text-blue-700">You didn't upload any Service Yet</h1>
                        <div className="flex justify-center">
                            <Lottie style={{ width: "500px" }} animationData={nodata} loop={true} />
                        </div>
                    </div>
            }
        </div>
    )
}

export default SingleManageService;