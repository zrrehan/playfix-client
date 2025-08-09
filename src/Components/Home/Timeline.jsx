function Timeline() {
    return(
        <div className="w-[90%] max-w-[1150px] mx-auto text-blue-700">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 header-font">Timeline of Playfix</h1>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic">2015</time>
                        <div className="text-lg font-black">First PS4 Repairs</div>
                        Began offering repair services for PS4 consoles, focusing on common issues like overheating, disc drive faults, and controller connectivity problems.
                    </div>
                    <hr />
                </li>

                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-end md:mb-10">
                        <time className="font-mono italic">2017</time>
                        <div className="text-lg font-black">Advanced PS4 Hardware Fixes</div>
                        Expanded into advanced hardware repairs such as HDMI port replacements, power supply issues, and motherboard-level diagnostics.
                    </div>
                    <hr />
                </li>

                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic">2020</time>
                        <div className="text-lg font-black">PS5 Launch & Services</div>
                        With the arrival of PS5, introduced repair solutions for display issues, SSD upgrades, fan replacements, and software troubleshooting.
                    </div>
                    <hr />
                </li>

                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-end md:mb-10">
                        <time className="font-mono italic">2023</time>
                        <div className="text-lg font-black">Full PS4 & PS5 Support</div>
                        Established complete repair services for both PS4 and PS5, covering display, storage, connectivity, and performance optimization.
                    </div>
                    <hr />
                </li>

                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic">2025</time>
                        <div className="text-lg font-black">Future-Ready Repairs</div>
                        Moving towards next-gen console support, preventive maintenance, and performance mods to keep your PlayStation running at peak performance.
                    </div>
                </li>
            </ul>

        </div>
    )
}

export default Timeline;