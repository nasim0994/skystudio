export default function Features() {
  return (
    <section className="py-10">
      <div className="container">
        <div className="mb-10 text-center text-neutral">
          <h2 className="text-5xl font-medium">Features &</h2>
          <h2 className="text-8xl">Amenities</h2>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <h2 className="text-4xl font-medium uppercase text-neutral">
              Community Shop
            </h2>
            <p className="mt-2 text-neutral-content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis alias deserunt sed ipsa velit facere ea, tempora
              facilis illo pariatur! sit amet consectetur adipisicing elit.
              Blanditiis alias deserunt sed ipsa velit facere ea, tempora
              facilis illo pariatur!
            </p>
          </div>

          <div>
            <img
              src="/images/project4.jpg"
              alt=""
              className="mx-auto w-[80%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
