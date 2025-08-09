import React from "react";
import faqAnimation from "../../lotties/faqAnimation.json"
import Lottie from "lottie-react";

function Faq() {
    return (
        <div className="my-12 px-4 md:px-10 max-w-4xl mx-auto text-blue-700">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 header-font">Frequently Asked Questions</h1>

            <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-6">
                <div className="join join-vertical bg-linear-to-t from-[#082c64] to-indigo-500 text-white rounded-4xl ">
                    <div className="collapse collapse-arrow join-item border ">
                        <input type="radio" name="faq-accordion" defaultChecked />
                        <div className="collapse-title font-semibold">
                            How do I book a console repair service?
                        </div>
                        <div className="collapse-content text-sm">
                            First, log in to your PlayFix account. Then, browse services and click "View Details" on the one you want. Click "Book Now" and fill out the booking form.
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border ">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title font-semibold">
                            Can I track the status of my booked service?
                        </div>
                        <div className="collapse-content text-sm">
                            Yes. Go to the "Booked Services" section from your Dashboard to see the current status (pending, working, or completed).
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border ">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title font-semibold">
                            I offer repair services. How do I add mine?
                        </div>
                        <div className="collapse-content text-sm">
                            Once logged in, go to the Dashboard then Add Service. Fill out the form with details, and your service will be listed for others to book.
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border ">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title font-semibold">
                            Is PlayFix available in all cities?
                        </div>
                        <div className="collapse-content text-sm">
                            Currently, PlayFix services are available in selected cities like Dhaka, Comilla, and Chattogram. More areas will be added soon.
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title font-semibold">
                            Can I cancel a service after booking?
                        </div>
                        <div className="collapse-content text-sm">
                            You can contact the service provider directly from the "Booked Services" section to request cancellation. Full cancellation support will be added soon.
                        </div>
                    </div>
                </div>

                <Lottie className="md:w-[500px]" animationData={faqAnimation} loop={true} />
            </div>
        </div>
    );
}

export default Faq;
