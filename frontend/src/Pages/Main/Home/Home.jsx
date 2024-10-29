import About from "../../../Components/Home/About/About";
import Contact from "../../../Components/Home/Contact";
import Counter from "../../../Components/Home/Counter";
import Features from "../../../Components/Home/Features/Features";
import Gallery from "../../../Components/Home/Gallery/Gallery";
import Hero from "../../../Components/Home/Hero/Hero";
import LandDesign from "../../../Components/Home/LandDesign";
import ProjectHighlight from "../../../Components/Home/ProjectHighlight/ProjectHighlight";
import WhyChoose from "../../../Components/Home/WhyChoose/WhyChoose";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <div className="mt-[95vh]">
        <About />
      </div>
      <Features />
      <Gallery />
      <ProjectHighlight />
      <Contact />
      <LandDesign />
    </>
  );
}
