import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid items-center gap-4 sm:grid-cols-2">
          <div>
            <img
              src="/images/about.jpg"
              alt="about"
              className="mx-auto w-[90%] rounded"
            />
          </div>

          <div>
            <p className="text-sm text-primary">who we are</p>

            <h2 className="mt-4 text-3xl font-medium">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
              laborum!
            </h2>

            <div className="mt-4 text-[15px] text-neutral-content">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
                vitae, beatae dignissimos voluptatibus enim libero hic quod
                officia voluptates, obcaecati quo illo architecto, voluptatem
                sapiente a quasi. Quidem, in vitae qui asperiores placeat vero
                et numquam veniam corporis nisi possimus, deserunt explicabo
                odio maiores sed! Illum consectetur at iure soluta?
              </p>

              <p className="mt-1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
                vitae, beatae dignissimos voluptatibus enim libero hic quod
                officia voluptates, obcaecati quo illo architecto, voluptatem
                sapiente a quasi. Quidem, in vitae qui asperiores placeat vero
                et numquam veniam corporis nisi possimus, deserunt explicabo
                odio maiores sed! Illum consectetur at iure soluta?
              </p>
            </div>

            <div className="mt-6">
              <Link to="/about" className="primary_btn">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
