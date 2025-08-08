import { Suspense, useEffect } from "react";
import Banner from "../Components/Home/Banner";
import HomeService from "../Components/Home/HomeServices";
import Diff from "../Components/Home/Diff";
import Faq from "../Components/Home/Faq";

const dataPromise = fetch("https://playfix-teal.vercel.app/").then((res) => res.json());

function Home() {
    useEffect(() => {
        document.querySelector("title").innerText = "Home"
    }, [])
    return(
        <div>
            <Banner></Banner>
            <Suspense>
                <HomeService dataPromise={dataPromise} ></HomeService>   
            </Suspense>        
            <Diff></Diff> 
            <Faq></Faq>   
        </div>
    )
}

export default Home;