function Diff() {
    return(
        <div className="max-w-[1440px] mx-auto  w-[90%] my-20">
            <figure className="diff aspect-16/9" tabIndex={0}>
                <div className="diff-item-1" role="img" tabIndex={0}>
                    <div className="bg-blue-600 rounded-4xl text-primary-content grid place-content-center text-7xl font-black">
                        Fixed Fast with PlayFix
                    </div>
                </div>
                <div className="diff-item-2" role="img">
                    <div className="bg-base-200 rounded-4xl grid place-content-center text-7xl font-black">
                        Fixed Fast with PlayFix
                    </div>
                </div>
                <div className="diff-resizer"></div>
            </figure>
        </div>
    )
}

export default Diff;