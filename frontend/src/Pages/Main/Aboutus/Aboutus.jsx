import { useEffect } from "react";
import About from "../../../Components/Home/About/About";

export default function Aboutus() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <About />

      {/* Board of Directors */}
      <section className="bg-slate-100 py-10">
        <div className="container">
          <h2 className="text-center text-3xl font-medium">
            Board of Directors
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="text-center">
              <img
                src="/images/ceo.jpeg"
                alt="ceo"
                className="mx-auto w-[80%] rounded"
              />
              <h4 className="mt-4 text-lg font-medium">Mr. Tanvir Seraj</h4>
              <p className="text-sm text-neutral-content">Chairman</p>
            </div>
            <div className="text-center">
              <img
                src="/images/ceo.jpeg"
                alt="ceo"
                className="mx-auto w-[80%] rounded"
              />
              <h4 className="mt-4 text-lg font-medium">Mr. Tanvir Seraj</h4>
              <p className="text-sm text-neutral-content">Chairman</p>
            </div>
            <div className="text-center">
              <img
                src="/images/ceo.jpeg"
                alt="ceo"
                className="mx-auto w-[80%] rounded"
              />
              <h4 className="mt-4 text-lg font-medium">Mr. Tanvir Seraj</h4>
              <p className="text-sm text-neutral-content">Chairman</p>
            </div>

            <div className="text-center">
              <img
                src="/images/ceo.jpeg"
                alt="ceo"
                className="mx-auto w-[80%] rounded"
              />
              <h4 className="mt-4 text-lg font-medium">Mr. Tanvir Seraj</h4>
              <p className="text-sm text-neutral-content">Chairman</p>
            </div>
          </div>
        </div>
      </section>

      {/* founder */}
      <section className="py-10">
        <div className="container">
          <div className="grid items-center gap-8 sm:grid-cols-2">
            <div>
              <h2 className="text-3xl font-medium">
                Late Dr. Toufiq M. Seraj (1956-2019)
              </h2>
              <h4 className="text-lg font-medium">Founder of Sheltech</h4>

              <div className="mt-4 text-[15px]">
                <p>
                  Dr. Toufiq M. Seraj was the Founder and former Managing
                  Director of Sheltech and its associated companies. He was a
                  visionary and a pioneer of real estate in Bangladesh and
                  played a leading role in shaping the real estate industry to
                  be where it is today.
                </p>

                <p className="mt-2">
                  His vision to provide beautiful and quality homes for the
                  resident of Dhaka led Sheltech to develop over 3700 apartments
                  all over the city, transforming Sheltech into a symbol of
                  excellence in the real estate industry of Bangladesh
                </p>

                <p className="mt-2">
                  His vision to provide beautiful and quality homes for the
                  resident of Dhaka led Sheltech to develop over 3700 apartments
                  all over the city, transforming Sheltech into a symbol of
                  excellence in the real estate industry of Bangladesh
                </p>
              </div>
            </div>
            <div>
              <img
                src="/images/ceo.jpeg"
                alt="founder"
                className="mx-auto w-[80%]"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
