import "../../../assets/css/counter.css";

export default function Counter() {
  return (
    <section className="counter_wrap">
      <div className="container">
        <h2 className="text-center text-xl font-bold uppercase text-black sm:text-3xl">
          Facts
        </h2>

        <div className="mt-6 grid grid-cols-4 gap-6">
          <div className="flex flex-col items-center justify-center gap-1">
            <h2 className="text-5xl font-bold text-primary">587</h2>
            <p className="text-neutral">Clients</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-1">
            <h2 className="text-5xl font-bold text-primary">7</h2>
            <p className="text-neutral">Projects</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-1">
            <h2 className="text-5xl font-bold text-primary">964</h2>
            <p className="text-neutral">Hours Of Support</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-1">
            <h2 className="text-5xl font-bold text-primary">74</h2>
            <p className="text-neutral">Hard Workers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
