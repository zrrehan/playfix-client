import logo from "../assets/logo.png"

function Footer() {
    return(
        <div>
            <footer className="footer sm:footer-horizontal  p-10 bg-linear-to-t from-[#082c64] to-indigo-500 text-white ">
                <aside>
                    <div>
                        <img className="w-14" src={logo} alt="logo" />
                    </div>
                    <p>
                        PlayFix Electronics
                        <br />
                        Providing reliable tech and service since 2015
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    )
}

export default Footer;