import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

function Register() {
    const { createUser, setNameImg, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    
    function formHandler(event) {
        event.preventDefault();
        const form = event.target
        const [name, url, email, password] = [form.name.value, form.url.value, form.email.value, form.password.value];
        if(name === "" || url === "" || email === "" || password === "") {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-start",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "error",
                title: "Fill all input fields"
            });
            return
        }
        createUser(email, password)
            .then(userCredential => {
                setNameImg(name, url).then(() => {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        }
                    });
                    Toast.fire({
                        icon: "success",
                        title: "Registered successful"
                      });

                    navigate("/");
                }) 
            }).catch((err) => {
                        const Toast = Swal.mixin({
                            toast: true,
                            position: "top-start",
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                                toast.onmouseenter = Swal.stopTimer;
                                toast.onmouseleave = Swal.resumeTimer;
                            }
                        });
                        Toast.fire({
                            icon: "error",
                            title: err.message
                            });
                    })
    }

    function googleButtonClicked() {
        signInWithGoogle().then(() => {
            navigate("/");
        })
    }
    return(
        <div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl bg-linear-to-r from-cyan-500 to-blue-500">
                <div className="card-body w-[500px]">
                    <form onSubmit = {formHandler} className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" className="input" placeholder="Name" name = "name"/>
                        <label className="label">Profile Picture URL</label>
                        <input type="text" className="input" placeholder="https/..." name = "url"/>
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email"  name = "email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" name = "password"/>
                        <button className="btn w-[200px] my-4 bg-white border-none shadow-none text-black hover:bg-black hover:text-white  px-15 rounded-3xl">Register</button>
                    </form>
                    <button onClick={googleButtonClicked} className="w-[200px] rounded-3xl btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Register;