import { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router";
import Lottie from "lottie-react";
import support from "../lotties/Support.json"

function AddService() {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
            document.querySelector("title").innerText = "Add Service"
        }, [])

    function handleForm(event) {
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
        
        // here it will be connected with the database
        data = {...data, providerName: user.displayName, providerEmail: user.email, providerImage: user.photoURL }
        data["servicePrice"] += " BDT"
        
        axios.post("https://playfix-teal.vercel.app/services", data, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then((data) => {
                Swal.fire("Your Service has been posted!");
                console.log(data.data);
                event.target.reset();
            }).catch(() => {
                Swal.fire({
                    title: "Session Expired",
                    text: "Session Expired! Please login Again",
                    icon: "error"
                });
                logOut()
                navigate("/auth")
            })
        

    }
    return(
        <div className="py-30 flex justify-center">
            <form onSubmit = {handleForm} className="fieldset bg-base-200 rounded-box w-xs border p-4 border-blue-700 text-blue-700">
                <legend className="fieldset-legend text-blue-700">Service Details</legend>

                <label className="label">Image URL</label>
                <input type="text" className="input" placeholder="https://" name= "serviceImage"/>

                <label className="label">Service Name</label>
                <input type="text" className="input" placeholder="Enter your service name" name= "serviceName"/>

                <label className="label">Price</label>
                <input type="number" className="input" placeholder="Enter the price in BDT" name= "servicePrice"/>

                <label className="label">Service Area</label>
                <input type="text" className="input" placeholder="Enter the Area" name= "location"/>

                <label className="label">Description</label>
                <fieldset className="fieldset">
                    <textarea className="textarea h-24" placeholder="Describe your Service" name= "serviceDescription"></textarea>
                </fieldset>

                <button className="btn  bg-linear-to-t from-sky-500 to-indigo-500 text-white">Submit</button>
            </form>
            <Lottie className="hidden md:flex" animationData={support} loop={true} />
        </div>
    )
}

export default AddService;