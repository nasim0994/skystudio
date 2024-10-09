import { useEffect } from "react";
import About from "../../../Components/Home/About/About";
import { useGetDirectorQuery } from "../../../Redux/director/directorApi";

export default function Aboutus() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us - GHL";
  }, []);

  const { data } = useGetDirectorQuery();
  const directors = data?.data;

  return (
    <section>
      <About />

      <section className="bg-slate-100 py-10">
        <div className="container">
          <h2 className="text-center text-3xl font-medium">
            Board of Directors
          </h2>
          <div className="mt-5 grid grid-cols-2 gap-y-2 md:mt-8 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
            {directors?.map((director) => (
              <div key={director?._id} className="text-center">
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}/${director?.image}`}
                  alt="ceo"
                  className="mx-auto h-[70%] w-[80%] overflow-hidden rounded md:h-[80%]"
                />
                <h4 className="mt-4 text-lg font-medium">{director?.name}</h4>
                <p className="text-sm text-neutral-content">
                  {director?.designation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
