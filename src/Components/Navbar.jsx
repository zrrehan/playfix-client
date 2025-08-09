import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png"
import { FaChevronDown, FaMoon } from "react-icons/fa";
import { motion } from "motion/react"
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import { FiSun } from "react-icons/fi";
import { RiMenu2Fill } from "react-icons/ri";
import { IoIosAddCircle, IoIosArrowForward } from "react-icons/io";
import { MdManageHistory, MdOutlineAutoAwesomeMotion } from "react-icons/md";
import { LuNotebookPen } from "react-icons/lu";

function Navbar({theme, setTheme}) {
    const { user, logOut } = useContext(AuthContext);
    console.log(theme)
    function logOutFunction() {
        Swal.fire({
            title: "Are you sure? ",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Log Out!"
        }).then((result) => {
            if (result.isConfirmed) {
                logOut().then(() => {
                    Swal.fire({
                        title: "Logged Out",
                        text: "You have been logged out successfully",
                        icon: "success"
                    });
                })
            }
          });
    }
    function themeToggle() {
        setTheme(!theme);
    }
    return(
        <div className="z-10 fixed top-0 w-full flex bg-linear-to-t from-[rgba(0,112,204,0.9)] to-indigo-500 h-[80px] pb-0.5 justify-between pr-7  shadow-sm">
            <div className=" w-[150px]  lg:w-[300px] flex items-center rounded-r-full">
                <div className="drawer w-fit lg:hidden">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="btn drawer-button" data-theme = "light">
                            <RiMenu2Fill />
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 space-y-4 text-xl">
                            {/* Sidebar content here */}
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <NavLink to="/">Home</NavLink>
                                {
                                    user && <li>
                                        <button className="flex justify-start items-center gap-2" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
                                            DashBoard <FaChevronDown />
                                        </button>
                                        <ul className="p-2 flex flex-col gap">
                                            <Link to="/add-service">Add Service</Link>
                                            <Link to="/manage-service">Manage Service</Link>
                                            <Link to="/booked-service">Booked Service</Link>
                                            <Link to="/service-to-do">Service To Do</Link>
                                        </ul>
                                    </li>
                                }
                                <NavLink to="/services">Services</NavLink>
                            </ul>
                        </ul>
                    </div>
                </div>
                <div className="w-16 ">
                    <img src={logo} className="w-full" alt="" />
                </div>
                <a className="text-5xl text-white hidden lg:block header-font">PlayFix</a>
            </div>
            <div className="flex items-center gap-11"> 
                <div className="w-[500px] justify-end   hidden lg:flex">
                    <ul className=" px-1 flex space-x-7 ">
                        <NavLink to ="/" className= "text-2xl border p-2 px-12 rounded-full">Home</NavLink>
                        {
                            user && <>
                                <button className="flex justify-center items-center gap-2" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
                                    <p className="text-2xl border p-2 px-12 rounded-full flex items-center gap-2.5">Dashboard<FaChevronDown /> </p> 
                                </button>

                                <ul className="dropdown menu w-60 rounded-b-2xl  shadow-sm flex flex-col space-y-2 absolute top-4 bg-[rgba(0,112,204,0.9)] "
                                    popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}>
                                    <Link to="/add-service" className="text-2xl flex items-center gap-3"><IoIosAddCircle size={30}/>Add Service</Link>
                                    <Link to="/manage-service" className="text-2xl flex items-center gap-3"><MdManageHistory />Manage Service</Link>
                                    <Link to="/booked-service" className="text-2xl flex items-center gap-3"><LuNotebookPen />Booked Service</Link>
                                    <Link to="/service-to-do" className="text-2xl flex items-center gap-3"><MdOutlineAutoAwesomeMotion /> Service To Do</Link>
                                </ul>
                            </>
                        }
                        <NavLink to="/services" className="text-2xl border p-2 px-12 rounded-full">Services</NavLink>
                    </ul>
                </div>
                <div className="flex justify-center items-center gap-4">
                    {/* toggle UI  */}
                    <a onClick={() => themeToggle()} data-tooltip-id="my-tooltip" data-tooltip-content="Dark-Light Theme Toggle" data-tooltip-place="top">
                        <div className="">
                            <label className="flex cursor-pointer gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="5" />
                                    <path
                                        d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                                </svg>
                                <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                            </label>
                        </div>
                    </a>
                    {
                        !user ?
                            <Link to="/auth">
                                <button className="btn bg-white border-none shadow-none text-black hover:bg-black hover:text-white  px-15 rounded-3xl">Login</button>
                            </Link> :
                            <div>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt="Tailwind CSS Navbar component"
                                                src= {user.photoURL} />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                        <li onClick={logOutFunction}><a>Logout</a></li>
                                    </ul>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar;