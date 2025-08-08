import { use } from "react"
import ManageServiceCard from "./ManageServiceCard";

function SingleManageService({dataPromise}) {
    const data = use(dataPromise);
    console.log(data);
    return(
        <div className="py-26 h-[100vh]">
            {
                data.length > 0 ? <>{
                    data.map((singleData) => <ManageServiceCard key={singleData._id} info={singleData}></ManageServiceCard>)
                }</>:
                    <div className="">
                        <h1 className="text-2xl font-bold text-center">You didn't upload any Service Yet</h1>
                    </div>
            }
        </div>
    )
}

export default SingleManageService;