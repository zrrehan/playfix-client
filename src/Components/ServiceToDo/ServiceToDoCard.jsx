import { motion } from "motion/react";
import { useContext } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoSettings } from "react-icons/io5";
import { TbCoinTakaFilled } from "react-icons/tb";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
function ServiceToDoCard({info}) {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    const { _id, providerName,
        providerEmail,
        providerImage,
        location,
        serviceImage,
        serviceName,
        serviceDescription,
        servicePrice, serviceStatus, serviceId, customerEmail } = info
    console.log(_id);
    
    function submitHandler(event) {
        event.preventDefault();
        console.log(event.target.status.value);
        const data = {serviceStatus: event.target.status.value, email: user.email}; 
        axios.put(`https://playfix-teal.vercel.app/updateStatus?id=${serviceId}&customerEmail=${customerEmail}`, data, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        }).then(res => {
            // update Successful;
            Swal.fire({
                title: `Work Updated to ${event.target.status.value}`,
                icon: "success",
              });
            navigate("/");

        })
    }
    return(
        <div>

            <motion.div
                initial={{ scale: 0.2 }} whileInView={{ scale: 1 }}
                className="card card-side  shadow-sm flex flex-col lg:flex-row lg:w-[1000px] border-2  mx-auto my-3 bg-linear-to-b from-[#082c64] to-indigo-500 text-white rounded-4xl">
                <div className="lg:w-[500px] flex items-center justify-center border rounded-3xl m-2  border-blue-700">
                    <img
                        className="w-full h-full rounded-3xl object-cover object-left"
                        src={serviceImage}
                        alt="Service Image" />
                </div>
                <div className="card-body">
                    <h2 className="card-title text-4xl header-font">{serviceName}</h2>
                    <p className="text-lg">
                        {
                            serviceDescription.length > 100 ? <p>{serviceDescription.slice(0, 100)}...</p>
                                : <p>{serviceDescription}</p>
                        }
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center">
                            <CiLocationOn size={24} /> {location}
                        </div>

                        <div className="flex items-center">
                            <TbCoinTakaFilled size={24} /> {servicePrice}
                        </div>

                        <div className="flex items-center gap-1">
                            <IoSettings size={24} /> {serviceStatus}
                        </div>
                    </div>

                    <form className="fieldset text-black" onSubmit={submitHandler} >
                        <legend className="fieldset-legend text-white">Select The Service Status</legend>
                        <select defaultValue= {serviceStatus} className="select rounded-3xl" name = "status">
                            <option disabled={true}>{serviceStatus}</option>
                            <option value = "Pending">Pending</option>
                            <option value = "Working">Working</option>
                            <option value= "Complete">Complete</option>
                        </select>
                        <br />
                        <button className="mt-3 btn  text-2xl w-[200px] rounded-3xl">Update</button>
                    </form>
                </div>
            </motion.div>
        </div>
    )
}

export default ServiceToDoCard;