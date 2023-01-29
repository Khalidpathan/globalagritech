import { Navigation } from "./navigation";
import { Header } from "./header";
import { Features } from "./features";
import { About } from "./about";
import { Contact } from "./contact";
import { useState, useEffect } from "react";
import JsonData from "../data/data.json";
import {Testimonials} from "./testimonials";



const Home = () => {

    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);


    return(
        <>
        <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      {/* <Services data={landingPageData.Services} /> */}
      {/* <Gallery data={landingPageData.Gallery}/> */}
      <Testimonials data={landingPageData.Testimonials}/> 
      <Contact data={landingPageData.Contact} />
        </>
    )
}

export default Home;