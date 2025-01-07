import { Link } from "react-router-dom";
import { useGetAllServiceQuery } from "../../Redux/service/serviceApi";

export default function Services() {
  const { data } = useGetAllServiceQuery();
  const services = data?.data;

  return (
    <section className="pb-20 pt-10">
      <div className="container">
        <h2 className="mx-auto text-center text-3xl font-semibold sm:w-2/3 sm:text-5xl">
          Services of Sky Studio
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services?.map((service, i) => {
            return (
              <Link
                to={`/service/${service?._id}`}
                key={i}
                className="service_card"
                data-aos="zoom-in"
              >
                <div className="overflow-hidden">
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}/${service?.image}`}
                    alt="feature"
                    className="mx-auto h-60 w-full rounded-lg object-cover"
                    loading="lazy"
                  />
                </div>
                <h2>{service?.title}</h2>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
