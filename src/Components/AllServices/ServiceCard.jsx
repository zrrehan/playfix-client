import { CiLocationOn } from "react-icons/ci";
import { TbCoinTakaFilled } from "react-icons/tb";
import { motion } from "motion/react";
import { Link } from "react-router";
function ServiceCard({info}) {
    const { _id, providerName,
        providerEmail,
        providerImage,
        location,
        serviceImage,
        serviceName,
        serviceDescription,
        servicePrice} = info
    
    return(
        <div>
            
            <motion.div
                initial={{ scale: 0.2 }} whileInView={{ scale: 1 }}
                className="card card-side bg-base-100 shadow-sm flex flex-col lg:flex-row lg:w-[1000px] border-2 border-blue-700 mx-auto my-3  ">
                <div className="lg:w-[500px] flex items-center justify-center border rounded-3xl m-2  border-blue-700">
                    <img
                        className="w- h-full rounded-3xl"
                        src= {serviceImage}
                        alt="Service Image" />
                </div>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{serviceName}</h2>
                    <p className="text-lg">
                        {
                            serviceDescription.length > 100 ? <p>{serviceDescription.slice(0, 100)}...</p>
                                : <p>{serviceDescription}</p>
                        }
                    </p>

                    <div className="flex gap-4">
                        <div className="flex items-center">
                            <CiLocationOn size={24} /> {location}
                        </div>

                        <div className="flex items-center">
                            <TbCoinTakaFilled size={24} /> {servicePrice}
                        </div>
                    </div>

                    <div className="flex gap-2 mt-3">
                        <div className="avatar">
                            <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
                                <img src={providerImage} />
                            </div>
                        </div>

                        <div className="flex items-center">
                            <h1 className="text-2xl">{providerName}</h1>
                        </div>
                    </div>
                    <Link to = {`/details/${_id}`}>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}

export default ServiceCard;