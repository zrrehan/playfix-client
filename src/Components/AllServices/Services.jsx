import { use } from "react"
import ServiceCard from "./ServiceCard";
import { useState } from "react";

function Services({dataPromise}) {
    const data = use(dataPromise);
    const [searchData, setSearchData] = useState(data);
    function searchHandler(event) {
        const search = event.target.value;
        if(search === "") {
            setSearchData(data)
        } else {
            let findSearch = data.filter((singleData) => {
                return singleData.serviceName.toUpperCase().includes(search.toUpperCase()) || 
                    singleData.providerName.toUpperCase().includes(search.toUpperCase()) ||
                    singleData.serviceDescription.toUpperCase().includes(search.toUpperCase()) 
            });
            setSearchData(findSearch);
        }
    }
    return(
        <div className="pt-40">
            <div className="flex justify-center">
                <label className="input mx-auto w-[90%] lg:w-[500px] rounded-3xl">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input onChange={searchHandler} type="search" required placeholder="Search" />
                </label>
            </div>
            {
                searchData.map(dataInfo => <ServiceCard info = {dataInfo}></ServiceCard>)
            }
        </div>
    )
}

export default Services;