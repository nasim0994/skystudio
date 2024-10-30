export default function Services() {
  const services = [
    {
      icon: "/services/furniture-2.png",
      title: "Interior Design",
      description:
        ". Our team of experienced designers crafts spaces that seamlessly blend aesthetics and functionality. From residential to commercial projects, we bring creativity and innovation to every corner, creating environments that inspire and captivate.",
    },
    {
      icon: "/services/house-1.png",
      title: "Exterior Design",
      description:
        "Our renovation services are designed to breathe new life into your existing spaces. Whether it’s a single room or an entire property, we work closely with you to understand your vision and deliver results that exceed your expectations.",
    },
    {
      icon: "/services/panoramic-view-1.png",
      title: "Landscaping",
      description:
        "Our landscaping services are designed to transform your outdoor spaces into beautiful and functional areas. From design to installation, we take care of every detail, ensuring that your garden or outdoor area is a true reflection of your style and personality.",
    },
    {
      icon: "/services/staircase-1.png",
      title: "Furniture Design",
      description:
        "Our furniture design services are tailored to your specific needs and preferences. Whether you’re looking for a custom piece or a complete set, our team of expert craftsmen will work with you to create furniture that is both beautiful and functional.",
    },
  ];

  return (
    <section className="py-10">
      <div className="container">
        <h2 className="mx-auto text-center text-3xl font-semibold sm:w-2/3 sm:text-5xl">
          Services of Astral interior
        </h2>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services?.map((service, i) => (
            <div key={i} className="feature_card">
              <img
                src={service?.icon}
                alt="feature"
                className="mx-auto w-20"
                loading="lazy"
              />
              <h2>{service?.title}</h2>
              <p>{service?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
