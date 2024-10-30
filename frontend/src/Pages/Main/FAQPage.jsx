import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const faqs = [
  {
    qus: "What is Netflix?",
    ans: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single commercial – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
  },
  {
    qus: "How much does Netflix cost?",
    ans: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹199 to ₹799 a month. No extra costs, no contracts.",
  },
  {
    qus: "Where can I watch?",
    ans: "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players, and game consoles.",
  },
  {
    qus: "How do I cancel?",
    ans: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    qus: "What can I watch on Netflix?",
    ans: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    qus: "Is Netflix good for kids?",
    ans: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
  },
];

export default function FAQPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [toggleFAQ, setToggleFAQ] = useState(null);

  const handelToggleFAQ = (i) => {
    if (toggleFAQ === i) {
      return setToggleFAQ(null);
    }
    setToggleFAQ(i);
  };

  return (
    <section className="py-10">
      <div className="container">
        <h2 className="text-center text-6xl">FAQ</h2>

        <div className="mx-auto mt-6 sm:w-2/3">
          {faqs?.map((faq, i) => (
            <div key={i} className="mb-2">
              <button
                onClick={() => handelToggleFAQ(i)}
                className="flex w-full items-center justify-between rounded bg-primary p-4 text-start text-sm font-semibold text-base-100 sm:text-base"
              >
                <p>{faq?.qus}</p>
                <span>
                  {toggleFAQ === i && "activeFAQ" ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </span>
              </button>

              {/* Content/Ans */}
              <div
                className={`faq-content text-neutral-content duration-500 ${
                  toggleFAQ === i && "activeFAQ"
                }`}
              >
                <p className="p-3 pb-5 text-sm sm:text-base">{faq?.ans}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
