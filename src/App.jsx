import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import {Testimonials} from "./components/testimonials";
import { Contact } from "./components/contact";

import  Home  from "./components/home";
import  Catlog  from "./components/catlog";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Routes, Route } from "react-router-dom"

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/catlog" element={ <Catlog/> } />
      </Routes>
      {/* <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} /> */}
      {/* <Services data={landingPageData.Services} /> */}
      {/* <Gallery data={landingPageData.Gallery}/> */}
      {<><Testimonials data={landingPageData.Testimonials} /></>}
      {/* <Contact data={landingPageData.Contact} /> */}
    </div>
   
  );
};

export default App;
