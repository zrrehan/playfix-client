import { use } from "react";
import ServiceToDoCard from "./serviceToDoCard";

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
                        <h1 className="text-2xl font-bold text-center">None Booked your Services yet!</h1>
                    </div>
            }
        </div>
    )
}

export default ServiceToDoAllCard;