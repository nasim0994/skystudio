import { MdOutlineEmail } from "react-icons/md";

export default function ContactUs() {
  return (
    <section className="bg-stone-100 py-10 sm:py-20">
      <div className="container">
        <div className="grid grid-cols-2 items-start">
          <div className="sm:w-1/2">
            <h2 className="text-6xl">Tell us about your project</h2>

            <p className="mt-3 text-lg text-neutral-content">
              We can help you elevate your customer experiences.
            </p>

            <div className="mt-14">
              <p className="text-xl text-neutral-content">
                or drop an email at
              </p>
              <a
                href="mailto:astralinterior@gmail.com"
                className="flex items-center gap-2 text-2xl text-[#9e8670]"
              >
                <p>
                  <MdOutlineEmail />
                </p>
                <p>astralinterior@gmail.com</p>
              </a>
            </div>
          </div>

          <div>
            <form>
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-md border border-gray-300 p-3"
              />
              <input
                type="text"
                placeholder="Phone"
                className="mt-4 w-full rounded-md border border-gray-300 p-3"
              />
              <input
                type="email"
                placeholder="Email"
                className="mt-4 w-full rounded-md border border-gray-300 p-3"
              />
              <textarea
                placeholder="Message"
                className="mt-4 w-full rounded-md border border-gray-300 p-3"
                rows={5}
              ></textarea>
              <button className="mt-2 w-full rounded-md bg-primary p-3 text-white">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
