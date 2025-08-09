import { motion } from "motion/react";
import { CiLocationOn } from "react-icons/ci";
import { IoSettings } from "react-icons/io5";
import { TbCoinTakaFilled } from "react-icons/tb";
import { Link } from "react-router";

function BookedServiceCard({info}) {
    const { _id, providerName,
        providerEmail,
        providerImage,
        location,
        serviceImage,
        serviceName,
        serviceDescription,
        servicePrice, serviceStatus } = info
    return(
        <div>

            <motion.div
                initial={{ scale: 0.2 }} whileInView={{ scale: 1 }}
                className="card card-side  shadow-sm flex flex-col lg:flex-row lg:w-[1000px] border-2  mx-auto my-3 bg-linear-to-b from-[#082c64] to-indigo-500 text-white rounded-4xl">
                <div className="lg:w-[500px] flex items-center justify-center border rounded-3xl m-2  border-blue-700">
                    <img
                        className="w-full h-full rounded-3xl"
                        src={serviceImage}
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
                        <div className="flex items-center gap-2">
                            <CiLocationOn size={34} /> {location}
                        </div>

                        <div className="flex items-center gap-2">
                            <TbCoinTakaFilled size={34} /> {servicePrice}
                        </div>

                        <div className="flex items-center gap-2">
                            <IoSettings size={34} /> {serviceStatus}
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
                </div>
            </motion.div>
        </div>
    )
}

export default BookedServiceCard;