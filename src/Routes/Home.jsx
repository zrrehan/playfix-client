import { Suspense, useEffect } from "react";
import Banner from "../Components/Home/Banner";
import HomeService from "../Components/Home/HomeServices";
import Diff from "../Components/Home/Diff";
import Faq from "../Components/Home/Faq";
import Timeline from "../Components/Home/Timeline";
import SecondBanner from "../Components/Home/SecondBanner";

const dataPromise = fetch("https://playfix-teal.vercel.app/").then((res) => res.json());

function Home() {
    useEffect(() => {
        document.querySelector("title").innerText = "Home"
    }, [])
    return(
        <div className="space-y-[200px]">
            <Banner></Banner>
            <Suspense>
                <HomeService dataPromise={dataPromise} ></HomeService>   
            </Suspense>    
            <SecondBanner></SecondBanner>    
            <Timeline></Timeline>
            <Faq></Faq>   
            
        </div>
    )
}

export default Home;