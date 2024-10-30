export default function ClientSlider() {
  const images = [
    { url: "/clients/acnabin.png" },
    { url: "/clients/aps-e1701801217188.png" },
    { url: "/clients/best-electronics.png" },
    { url: "/clients/cotton-villa.png" },
    { url: "/clients/eternal-green.png" },
    { url: "/clients/evergreen.png" },
    { url: "/clients/sb-group.png" },
    { url: "/clients/x-index.png" },
    { url: "/clients/zaman.png" },
  ];

  return (
    <section className="bg-stone-100 py-10">
      <h2 className="mb-4 text-center text-4xl font-medium text-neutral sm:text-5xl">
        Featured Clients
      </h2>
      <div className="container">
        <div class="wrapper">
          {images.map((img, index) => (
            <div key={index} className={`itemLeft item${index + 1}`}>
              <img src={img?.url} alt="" />
            </div>
          ))}
        </div>
        <div class="wrapper">
          {images.map((img, index) => (
            <div key={index} className={`itemRight item${index + 1}`}>
              <img src={img?.url} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
