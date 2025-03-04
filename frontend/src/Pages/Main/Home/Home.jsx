import { useEffect } from "react";
import ClientSlider from "../../../Components/Home/ClientSlider";
import Contact from "../../../Components/Home/Contact";
import ContactUs from "../../../Components/Home/ContactUs";
import Counter from "../../../Components/Home/Counter";
import Features from "../../../Components/Home/Features/Features";
import Gallery from "../../../Components/Home/Gallery/Gallery";
import ProjectHighlight from "../../../Components/Home/ProjectHighlight/ProjectHighlight";
import Services from "../../../Components/Home/Services";
import ClientVideoReview from "../../../Components/Home/ClientVideoReview";
import HeroSlider from "../../../Components/Home/HeroSlider";
import AboutUs from "../../../Components/Home/AboutUs";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSlider />
      <AboutUs />
      <Services />
      <Features />
      <ProjectHighlight />
      <Contact />
      <Gallery />
      <ClientSlider />
      <ClientVideoReview />
      <Counter />
      <ContactUs />
    </>
  );
}
