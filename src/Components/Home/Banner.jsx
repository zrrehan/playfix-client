import { animate } from "motion";
import hero from "../../assets/hero.png"
import { motion } from "motion/react"
import bg from "../../assets/psbg.png"
import { Link } from "react-router";

function Banner() {
    return(
        <div style={{ backgroundImage: `url(${bg})` }} className={`hero min-h-screen py-56 bg-cover bg-right text-white}`}>
            <div className="hero-content flex-col lg:flex-row">
                <motion.img
                    initial={{ scale: 0 }} whileInView={{ scale: 1, transition: { duration: 1 } } }
                    className=" border-b-10 rounded-bl-2xl border-white"
                    src = {hero}
                />
                <motion.div
                    initial={{ y: 100 }} whileInView={{ y: 0, transition: { duration: 0.4 } }}
                    className="bg-[#ffffff36] p-5 rounded-3xl"
                >
                    <h1 className="text-5xl font-bold header-font">Your One-Stop PlayStation Service Hub in Bangladesh</h1>
                    <p className="py-6 ">
                        From repairs and upgrades to expert support — we’ve got your PlayStation covered. Fast, reliable, and gamer-approved services across Bangladesh.
                    </p>
                    <Link to = "/services">
                        <button className="btn btn-primary text-3xl bg-blue-700 hover:bg-blue-900 px-24 py-6 rounded-full">Services</button>
                    </Link>

                </motion.div>
            </div>
        </div>
    )
}

export default Banner;