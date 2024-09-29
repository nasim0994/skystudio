import About from "../../../Components/Home/About/About";
import Counter from "../../../Components/Home/Counter/Counter";
import Hero from "../../../Components/Home/Hero/Hero";
import Projects from "../../../Components/Home/Projects/Projects";
import WhyChoose from "../../../Components/Home/WhyChoose/WhyChoose";
import PopulerProjects from "../../../Components/Home/PopulerProjects/PopulerProjects";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <Projects />
      <WhyChoose />
      <About />
      <Counter />
      <PopulerProjects />
    </>
  );
}
