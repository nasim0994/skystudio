import { useEffect } from "react";
import About from "../../../Components/Home/About/About";
import ClientSlider from "../../../Components/Home/ClientSlider";
import Contact from "../../../Components/Home/Contact";
import ContactUs from "../../../Components/Home/ContactUs";
import Counter from "../../../Components/Home/Counter";
import Features from "../../../Components/Home/Features/Features";
import Gallery from "../../../Components/Home/Gallery/Gallery";
import Hero from "../../../Components/Home/Hero/Hero";
import LandDesign from "../../../Components/Home/LandDesign";
import ProjectHighlight from "../../../Components/Home/ProjectHighlight/ProjectHighlight";
import Services from "../../../Components/Home/Services";
import WhyChoose from "../../../Components/Home/WhyChoose/WhyChoose";
import ClientVideoReview from "../../../Components/Home/ClientVideoReview";
import OurApproach from "../../../Components/Home/OurApproach";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Features />
      <Services />
      <ProjectHighlight />
      <WhyChoose />
      <Contact />
      <LandDesign />
      <Gallery />
      <ClientSlider />
      <OurApproach />
      <ClientVideoReview />
      <Counter />
      <ContactUs />
    </>
  );
}
