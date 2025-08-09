import axios from "axios";
import { useContext } from "react";
import { CiLocationOn } from "react-icons/ci";
import { TbCoinTakaFilled } from "react-icons/tb";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";

function ManageServiceCard({info}) {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const { _id, providerName,
        providerEmail,
        providerImage,
        location,
        serviceImage,
        serviceName,
        serviceDescription,
        servicePrice } = info;

    
    function formHandler(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const entries = formData.entries();
        let data = Object.fromEntries(entries);

        for (let key in data) {
            if(data[key] === "") {
                Swal.fire({
                    text: "Please complete all required fields",
                    icon: "error"
                    });
                return 
            }
        }
        data["servicePrice"] += " BDT"
        data = {...data, email: user.email}
        axios.put(`https://playfix-teal.vercel.app/update?id=${_id}`,data, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then((res) => {
                navigate("/")
                Swal.fire({
                                title: "Update Successful",
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
            })
    }

    function deleteFunctionality() {
        console.log(_id);
        axios.delete(`https://playfix-teal.vercel.app/delete?id=${_id}&email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                navigate("/");
                axios.delete(`https://playfix-teal.vercel.app/delete?id=${_id}&email=${user.email}`, {
                    headers: {
                        authorization: `Bearer ${user.accessToken}`
                    }
                }).then(() => {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                })
            }
          });
    }
    return(
        <div className="flex flex-col lg:flex-row space-x-8 my-7 bg-base-300 rounded-4xl  lg:w-[1000px] mx-auto p-5  shadow-sm  border-2   bg-linear-to-b from-[#082c64] to-indigo-500 text-white">
            <div className="w-[90%] lg:w-[400px] rounded-3xl border border-blue-700">
                <img src={serviceImage}  className = "w-full rounded-3xl object-cover h-full" alt="" />
            </div>

            <div className="card-body">
                <h2 className="card-title text-4xl header-font">{serviceName}</h2>
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
                </div>

                <div className="flex gap-2 mt-3">
                    <div onClick={() => document.getElementById(`my_modal_${_id}`).showModal()} className="btn px-12 rounded-3xl flex items-center gap-2"><GrUpdate />Update</div>
                    <div onClick={deleteFunctionality} className="btn  px-12 rounded-3xl flex items-center gap-2"><MdDeleteOutline />Delete</div>
                </div>

                <dialog id={`my_modal_${_id}`} className="modal">
                    <div className="modal-box">
                        <form onSubmit={formHandler} className="fieldset bg-base-200 border-base-300 rounded-box border p-4 w-full ">
                            <legend className="fieldset-legend">Page details</legend>

                            <label className="label">Location</label>
                            <input type="text" className="input" name = "location" defaultValue={location}  />

                            <label className="label">Service Image</label>
                            <input type="text" className="input" name = "serviceImage" defaultValue={serviceImage}  />

                            <label className="label">Service Name</label>
                            <input type="text" className="input" defaultValue={serviceName}  name = "serviceName"/>

                            <label className="label">Service Description</label>
                            <input type="text" className="input" defaultValue={serviceDescription}  name = "serviceDescription"/>

                            <label className="label">Service Price</label>
                            <input type="number" className="input" defaultValue={servicePrice.split(" ")[0]}  name = "servicePrice"/>

                            <button className="btn btn-primary rounded-3xl">Update</button>
                            <div className="badge badge-outline badge-warning">To Close modal press outside of the modal</div>
                        </form>

                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </div>
        </div>
    )
}

export default ManageServiceCard;