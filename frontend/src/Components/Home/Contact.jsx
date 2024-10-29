import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className="py-10">
      <div className="container">
        <div className="flex items-center justify-between">
          <h2 className="text-5xl font-medium text-neutral">
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
