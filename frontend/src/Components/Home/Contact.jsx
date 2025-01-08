import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className="bg-gray-50 py-10">
      <div className="container">
        <div className="items-center justify-between sm:flex">
          <h2 className="text-4xl font-medium text-neutral">
            Have Any Question?
          </h2>
          <Link to="/contact-us" className="primary_btn">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
