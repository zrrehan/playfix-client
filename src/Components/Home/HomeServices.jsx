import { use } from "react"
import ServiceCard from "../AllServices/ServiceCard";
import { motion } from "motion/react";
import { Link } from "react-router";

function HomeService({dataPromise}) {
    const data = use(dataPromise).slice(0, 6);

    return(
        <div>
            <motion.h1 
                initial={{ y: -100 }}
                whileInView={{ y: 0, transition: { duration: 0.5 } }}
                className="text-5xl font-bold text-center text-blue-700 italic">Recent Services</motion.h1>
            {
                data.map(dataInfo => <ServiceCard info={dataInfo}></ServiceCard>)
            }

            <Link to = "/services">
                <div className="flex justify-center">
                    <div className="btn btn-primary bg-linear-to-t from-[#082c64] to-indigo-500 px-24 hover:bg-blue-900 py-7 text-3xl rounded-3xl ">Show All</div>
                </div>
            </Link>
        </div>
    )
}

export default HomeService;