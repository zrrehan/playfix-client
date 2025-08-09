import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import { TbCoinTakaFilled } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { CalendarDate, CalendarMonth } from "cally";
import Swal from "sweetalert2";
import bookings from "../lotties/booking.json"
import Lottie from "lottie-react";
import Loading from "../Components/loading";

function Details() {
    const {id} = useParams();
    const { user } = useContext(AuthContext);
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const body = {
            email: user.email,
            id: id,
        }
        axios.get("https://playfix-teal.vercel.app/details", {
            params: body,
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        }).then((res) => {
            setData(res.data);
            document.querySelector("title").innerText = "Details"
        });
    }, [])
    if(!user || !data) {
        return <Loading></Loading>
    }

    const { _id, providerName,
        providerEmail,
        providerImage,
        location,
        serviceImage,
        serviceName,
        serviceDescription,
        servicePrice } = data
    
    function formHandler(event) {
        event.preventDefault();
        console.log("hello world")
        const [date, instruction] = [event.target.date.value, event.target.instruction.value]
        const sendingDate = {...data, date, instruction, customerEmail: user.email}
        console.log(sendingDate);

        axios.post("https://playfix-teal.vercel.app/book-now", sendingDate, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        }).then(res => {
            navigate("/")
            if (res.data[0] == "Already booked") {
                Swal.fire({
                    title: "You Already Booked that service",
                    icon: "error",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });
                return;
            }
            Swal.fire({
                title: "The Service is Booked for you!",
                showClass: {
                    popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                    popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
        });
    }

    return(
        <div className="py-24 lg:w-[1000px] mx-auto flex flex-col lg:flex-row justify-center items-center gap-6">
            <div>
                <Lottie style={{ width: "500px" }} animationData={bookings} loop={true} />
            </div>
            <div className="px-10 rounded-3xl py-5 shadow-sm bg-linear-to-t from-[#082c64] to-indigo-500 text-white">
                <div className="mb-10">
                    <img
                        className="rounded-3xl mx-auto"
                        src={serviceImage}
                        alt="Service Image" />
                </div>
                <div className="divider"></div>
                <div className="">
                    <h2 className="card-title text-3xl header-font">{serviceName}</h2>
                    <p className="my-3">{serviceDescription}</p>
                    <div className="flex gap-4">
                                            <div className="flex items-center">
                                                <CiLocationOn size={24} /> {location}
                                            </div>
                    
                                            <div className="flex items-center">
                                                <TbCoinTakaFilled size={24} /> {servicePrice}
                                            </div>
                                        </div>
                    <div className="divider "></div>
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
                    <div className="card-actions justify-end">
                        <button onClick={() => document.getElementById('my_modal_2').showModal()} className="btn bg-white px-14 rounded-4xl text-2xl">Book Now</button>
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <form onSubmit={formHandler} className="fieldset bg-base-200 border-base-300 rounded-box border p-4 w-full ">
                                    <legend className="fieldset-legend">Page details</legend>

                                    <label className="label">ID</label>
                                    <input type="text" className="input" value={data._id} readOnly disabled />

                                    <label className="label">Provider Name</label>
                                    <input type="text" className="input" value={data.providerName} readOnly disabled />

                                    <label className="label">Provider Email</label>
                                    <input type="text" className="input" value={data.providerEmail} readOnly disabled />

                                    <label className="label">Provider Image</label>
                                    <input type="text" className="input" value={data.providerImage} readOnly disabled />

                                    <label className="label">Location</label>
                                    <input type="text" className="input" value={data.location} readOnly disabled />

                                    <label className="label">Service Image</label>
                                    <input type="text" className="input" value={data.serviceImage} readOnly disabled />

                                    <label className="label">Service Name</label>
                                    <input type="text" className="input" value={data.serviceName} readOnly disabled />

                                    <label className="label">Service Description</label>
                                    <input type="text" className="input" value={data.serviceDescription} readOnly disabled />

                                    <label className="label">Service Price</label>
                                    <input type="text" className="input" value={data.servicePrice} readOnly disabled />
                                
                                    <label className="label">Service Date</label>
                                    <input name = "date" type="date" ></input>

                                    <label className="label">Special Instruction</label>
                                    <fieldset className="fieldset">
                                        <textarea className="textarea h-24" placeholder="Describe your Service" name="instruction"></textarea>
                                    </fieldset>
                                    <button className="btn btn-primary">Book Now</button>
                                    <div className="badge badge-outline badge-warning">To Close modal press outside of the modal</div>
                                </form>

                            </div>

                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;