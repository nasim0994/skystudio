import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export default function WhyChoose() {
  return (
    <section className="mt-10 grid bg-slate-100 sm:grid-cols-2">
      <div className="flex flex-col items-center justify-center py-8 sm:py-0">
        <h2 className="text-center text-4xl font-medium text-primary">
          What Makes Us <br /> the Best in Real Estate
        </h2>
        <div className="mt-6">
          <ul className="grid gap-4 sm:grid-cols-2">
            <li className="flex items-center gap-2">
              <p>
                <IoIosCheckmarkCircleOutline className="text-[28px] text-primary/50" />
              </p>
              <p>100% Client Satisfaction</p>
            </li>
            <li className="flex items-center gap-2">
              <p>
                <IoIosCheckmarkCircleOutline className="text-[28px] text-primary/50" />
              </p>
              <p>36 Years od Success</p>
            </li>
            <li className="flex items-center gap-2">
              <p>
                <IoIosCheckmarkCircleOutline className="text-[28px] text-primary/50" />
              </p>
              <p>For Quality Control</p>
            </li>
            <li className="flex items-center gap-2">
              <p>
                <IoIosCheckmarkCircleOutline className="text-[28px] text-primary/50" />
              </p>
              <p>On Time Handover</p>
            </li>
            <li className="flex items-center gap-2">
              <p>
                <IoIosCheckmarkCircleOutline className="text-[28px] text-primary/50" />
              </p>
              <p>Ethical Engineering</p>
            </li>
            <li className="flex items-center gap-2">
              <p>
                <IoIosCheckmarkCircleOutline className="text-[28px] text-primary/50" />
              </p>
              <p>Rajuk Approved</p>
            </li>
            <li className="flex items-center gap-2">
              <p>
                <IoIosCheckmarkCircleOutline className="text-[28px] text-primary/50" />
              </p>
              <p>Ethical Engineering</p>
            </li>
            <li className="flex items-center gap-2">
              <p>
                <IoIosCheckmarkCircleOutline className="text-[28px] text-primary/50" />
              </p>
              <p>Rajuk Approved</p>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <img
          src="/images/slider1.jpg"
          alt=""
          className="h-72 w-full sm:h-[500px]"
        />
      </div>
    </section>
  );
}
