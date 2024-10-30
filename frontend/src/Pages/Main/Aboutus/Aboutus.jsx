import { useEffect } from "react";
import About from "../../../Components/Home/About/About";
import { useGetDirectorQuery } from "../../../Redux/director/directorApi";
import Counter from "../../../Components/Home/Counter";
import ClientSlider from "../../../Components/Home/ClientSlider";

export default function Aboutus() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data } = useGetDirectorQuery();
  const directors = data?.data;

  return (
    <section>
      <About />
      <Counter />
      <ClientSlider />
    </section>
  );
}
