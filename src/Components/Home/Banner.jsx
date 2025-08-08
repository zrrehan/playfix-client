import { animate } from "motion";
import hero from "../../assets/hero.png"
import { motion } from "motion/react"

function Banner() {
    return(
        <div className="hero bg-base-200 min-h-screen py-56">
            <div className="hero-content flex-col lg:flex-row">
                <motion.img
                    initial={{ scale: 0 }} whileInView={{ scale: 1, transition: { duration: 1 } } }
                    className=" border-b-10 rounded-bl-2xl border-blue-600"
                    src = {hero}
                />
                <motion.div
                    initial={{ y: 100 }} whileInView={{ y: 0, transition: { duration: 0.4 } }}
                >
                    <h1 className="text-5xl font-bold header-font">Your One-Stop PlayStation Service Hub in Bangladesh</h1>
                    <p className="py-6 ">
                        From repairs and upgrades to expert support — we’ve got your PlayStation covered. Fast, reliable, and gamer-approved services across Bangladesh.
                    </p>
                    <button className="btn btn-primary bg-blue-700 hover:bg-blue-900 px-14 rounded-3xl">Services</button>
                </motion.div>
            </div>
        </div>
    )
}

export default Banner;