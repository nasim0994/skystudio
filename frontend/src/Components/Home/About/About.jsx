import { Link } from "react-router-dom";
import { useGetAboutUsQuery } from "../../../Redux/about/aboutApi";
import parse from "html-react-parser";

export default function About() {
  const { data } = useGetAboutUsQuery();

  const about = data?.data;
  const description = about?.description && parse(about?.description);

  return (
    <section className="py-10 md:py-20">
      <div className="container">
        <div className="grid items-center gap-8 md:gap-4 sm:grid-cols-2">
          <div>
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/${about?.image}`}
              alt="about"
              className="mx-auto w-[90%] rounded"
            />
          </div>

          <div className="">
            <p className="text-sm text-primary">{about?.heading}</p>

            <h2 className="mt-4 text-7xl md:text-8xl font-medium uppercase text-neutral">
              {about?.title}
            </h2>

            <h2 className="mt-1 text-3xl"> {about?.subTitle} </h2>

            <div className="mt-4 text-[10px] md:text-[15px] text-neutral-content">
              <p>{description}</p>
            </div>

            <div className="mt-6">
              <Link to="/about-us" className="primary_btn">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
