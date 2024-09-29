import { FaBath, FaBed } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";

export default function ProjectDetails() {
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid items-start gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <div>
              <img
                src="/images/project2.jpg"
                alt="project"
                className="h-56 w-full rounded-md sm:h-[360px]"
              />
            </div>

            <div className="flex items-center gap-3 border-t p-3 text-xs">
              <div className="flex items-center gap-2 border-r pr-3">
                <p className="text-secondary">
                  <FaBed className="text-base" />
                </p>
                <p>3 Beds</p>
              </div>

              <div className="flex items-center gap-2 border-r pr-3">
                <p className="text-secondary">
                  <FaBath className="text-base" />
                </p>
                <p>3 Bath</p>
              </div>

              <div className="flex items-center gap-2">
                <p className="text-secondary">
                  <MdSpaceDashboard className="text-base" />
                </p>
                <p>1200 sqft</p>
              </div>
            </div>

            <div className="mt-2">
              <h2 className="text-4xl font-medium">
                Duplex sea facing for rent
              </h2>
              <h3 className="mt-1 text-xl font-medium text-primary">
                $ 652.18
              </h3>
              <p className="mt-2 text-sm text-neutral-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis incidunt voluptates in, maiores sint ea magni
                accusamus voluptatum ab praesentium minima ex dolorem aut dolore
                similique eum? Laudantium non, vitae dolorum perferendis rerum
                debitis quod tempore asperiores tempora libero esse deleniti
                pariatur aliquid qui amet distinctio odio. Minima in quod totam
                culpa qui nobis blanditiis libero, esse laudantium natus nisi
                optio quae, impedit accusamus voluptates doloremque quia nemo
                enim exercitationem. Sit nemo aliquam magni libero repellat.
                Ullam aut deleniti reiciendis impedit possimus ratione ipsa,
                error quae consectetur similique animi cupiditate repellat
                exercitationem maiores inventore saepe pariatur, in accusantium
                officiis iste?
              </p>

              <p className="mt-2 text-sm text-neutral-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis incidunt voluptates in, maiores sint ea magni
                accusamus voluptatum ab praesentium minima ex dolorem aut dolore
                similique eum? Laudantium non, vitae dolorum perferendis rerum
                debitis quod tempore asperiores tempora libero esse deleniti
                pariatur aliquid qui amet distinctio odio. Minima in quod totam
                culpa qui nobis blanditiis libero, esse laudantium natus nisi
                optio quae, impedit accusamus voluptates doloremque quia nemo
                enim exercitationem. Sit nemo aliquam magni libero repellat.
                Ullam aut deleniti reiciendis impedit possimus ratione ipsa,
                error quae consectetur similique animi cupiditate repellat
                exercitationem maiores inventore saepe pariatur, in accusantium
                officiis iste?
              </p>
            </div>

            <div className="mt-2">
              <h2 className="text-2xl font-medium text-neutral">
                Photo Gallery
              </h2>

              <div className="mt-2 grid grid-cols-3 gap-4">
                <img
                  src="/images/project1.jpg"
                  alt="project"
                  className="w-full rounded"
                />
                <img
                  src="/images/project2.jpg"
                  alt="project"
                  className="w-full rounded"
                />
                <img
                  src="/images/project2.jpg"
                  alt="project"
                  className="w-full rounded"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="-mt-2 text-2xl font-medium">Related Projects</h2>

            <div className="mt-2 flex flex-col gap-6">
              <div className="flex gap-2">
                <img
                  src="/images/project1.jpg"
                  alt="project"
                  className="h-16 w-[100px] rounded-md"
                />
                <div>
                  <h3 className="text-lg font-medium">
                    Duplex sea facing for rent
                  </h3>

                  <p className="mt-1 text-xs text-neutral-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat...
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <img
                  src="/images/project1.jpg"
                  alt="project"
                  className="h-16 w-[100px] rounded-md"
                />
                <div>
                  <h3 className="text-lg font-medium">
                    Duplex sea facing for rent
                  </h3>

                  <p className="mt-1 text-xs text-neutral-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat...
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <img
                  src="/images/project1.jpg"
                  alt="project"
                  className="h-16 w-[100px] rounded-md"
                />
                <div>
                  <h3 className="text-lg font-medium">
                    Duplex sea facing for rent
                  </h3>

                  <p className="mt-1 text-xs text-neutral-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
