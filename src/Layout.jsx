import { Outlet } from "react-router"
import Navbar from "./Components/Navbar";
import { useState } from "react";
import Footer from "./Components/Footer";

function Layout() {
    const [theme, setTheme] = useState(true)
    return(
        <div>
            <Navbar theme = {theme} setTheme = {setTheme}></Navbar>
            <div className="pb-20" data-theme={theme ? `light` : `dark`}>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Layout;