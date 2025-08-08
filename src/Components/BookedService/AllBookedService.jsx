import { use } from "react"
import BookedServiceCard from "./BookedServiceCard";

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
                    <h1 className="text-2xl font-bold text-center">You didn't Book any Service Yet</h1>
                </div>
            }
        </div>
    )
}

export default AllBookedService;