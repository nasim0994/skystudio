import { Link } from "react-router-dom";
import { useGetAboutUsQuery } from "../../../Redux/about/aboutApi";
import parse from "html-react-parser";

export default function About() {
  const { data } = useGetAboutUsQuery();

  const about = data?.data;
  const description = about?.description && parse(about?.description);

  return (
    <section className="py-10">
      <div className="container">
        <div className="grid items-center gap-8 sm:grid-cols-2 md:gap-4">
          <div data-aos="fade-up">
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/${about?.image}`}
              alt="about"
              className="mx-auto w-[80%] rounded"
            />
          </div>

          <div data-aos="fade-down">
            <p className="text-sm text-primary">{about?.heading}</p>

            <h2 className="mt-4 text-7xl font-medium uppercase text-neutral md:text-8xl">
              {about?.title}
            </h2>

            <h2 className="mt-1 text-3xl"> {about?.subTitle} </h2>

            <div className="mt-4 text-[10px] text-neutral-content md:text-[15px]">
              {description}
            </div>

            <div className="mt-6 flex gap-3">
              <Link
                to={`${import.meta.env.VITE_BACKEND_URL}/${about?.profileDoc}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="primary_btn">Astral Interior Profile</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
