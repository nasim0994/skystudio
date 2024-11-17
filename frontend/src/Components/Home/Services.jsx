import { Link } from "react-router-dom";
import { useGetAllServiceQuery } from "../../Redux/service/serviceApi";

export default function Services() {
  const { data } = useGetAllServiceQuery();
  const services = data?.data;

  return (
    <section className="py-10">
      <div className="container">
        <h2 className="mx-auto text-center text-3xl font-semibold sm:w-2/3 sm:text-5xl">
          Services of Archi Home
        </h2>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services?.map((service, i) => {
            const description =
              service?.description &&
              service?.description.replace(/<[^>]+>/g, "");

            return (
              <Link
                to={`/service/${service?._id}`}
                key={i}
                className="service_card"
                data-aos="zoom-in"
              >
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}/${service?.image}`}
                  alt="feature"
                  className="mx-auto w-20"
                  loading="lazy"
                />
                <h2>{service?.title}</h2>
                <p>
                  {description?.length > 80
                    ? description?.slice(0, 80) + "..."
                    : description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
