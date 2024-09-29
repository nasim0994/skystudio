import { useEffect } from "react";
import { FaBath, FaBed, FaMapMarkerAlt } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-5 sm:py-10">
      <div className="container">
        {/* filter */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4">
          <div className="flex justify-end">
            <select>
              <option value="all">All</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>
          <div className="flex justify-end">
            <select>
              <option value="all">All</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>
          <div className="flex justify-end">
            <select>
              <option value="all">All</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>
        </div>

        {/* projects */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link to="" className="project_card">
            <div className="relative h-60 w-full overflow-hidden rounded-lg">
              <img src="/images/project1.jpg" alt="project" />

              <div className="absolute left-0 top-0 h-full w-full bg-black/30">
                <div className="absolute bottom-0 p-3">
                  <p className="flex items-center gap-2 text-[13px] text-base-100">
                    <FaMapMarkerAlt /> Gulshan, Dhaka
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3">
              <h2 className="text-2xl font-medium">
                Duplex sea facing for rent
              </h2>
              <p className="text-lg font-medium text-primary">$ 652.18</p>
              <p className="mt-2 text-sm text-neutral-content">
                Beautiful, updated, ground level Co-op apartment in the
                desirable Bay Terrace neighborhood
              </p>
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
          </Link>

          <Link to="" className="project_card">
            <div className="relative h-60 w-full overflow-hidden rounded-lg">
              <img src="/images/project3.jpg" alt="project" />

              <div className="absolute left-0 top-0 h-full w-full bg-black/30">
                <div className="absolute bottom-0 p-3">
                  <p className="flex items-center gap-2 text-[13px] text-base-100">
                    <FaMapMarkerAlt /> Gulshan, Dhaka
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3">
              <h2 className="text-2xl font-medium">
                Duplex sea facing for rent
              </h2>
              <p className="text-lg font-medium text-primary">$ 652.18</p>
              <p className="mt-2 text-sm text-neutral-content">
                Beautiful, updated, ground level Co-op apartment in the
                desirable Bay Terrace neighborhood
              </p>
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
          </Link>

          <Link to="" className="project_card">
            <div className="relative h-60 w-full overflow-hidden rounded-lg">
              <img src="/images/project2.jpg" alt="project" />

              <div className="absolute left-0 top-0 h-full w-full bg-black/30">
                <div className="absolute bottom-0 p-3">
                  <p className="flex items-center gap-2 text-[13px] text-base-100">
                    <FaMapMarkerAlt /> Gulshan, Dhaka
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3">
              <h2 className="text-2xl font-medium">
                Duplex sea facing for rent
              </h2>
              <p className="text-lg font-medium text-primary">$ 652.18</p>
              <p className="mt-2 text-sm text-neutral-content">
                Beautiful, updated, ground level Co-op apartment in the
                desirable Bay Terrace neighborhood
              </p>
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
          </Link>

          <Link to="" className="project_card">
            <div className="relative h-60 w-full overflow-hidden rounded-lg">
              <img src="/images/project1.jpg" alt="project" />

              <div className="absolute left-0 top-0 h-full w-full bg-black/30">
                <div className="absolute bottom-0 p-3">
                  <p className="flex items-center gap-2 text-[13px] text-base-100">
                    <FaMapMarkerAlt /> Gulshan, Dhaka
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3">
              <h2 className="text-2xl font-medium">
                Duplex sea facing for rent
              </h2>
              <p className="text-lg font-medium text-primary">$ 652.18</p>
              <p className="mt-2 text-sm text-neutral-content">
                Beautiful, updated, ground level Co-op apartment in the
                desirable Bay Terrace neighborhood
              </p>
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
          </Link>

          <Link to="" className="project_card">
            <div className="relative h-60 w-full overflow-hidden rounded-lg">
              <img src="/images/project3.jpg" alt="project" />

              <div className="absolute left-0 top-0 h-full w-full bg-black/30">
                <div className="absolute bottom-0 p-3">
                  <p className="flex items-center gap-2 text-[13px] text-base-100">
                    <FaMapMarkerAlt /> Gulshan, Dhaka
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3">
              <h2 className="text-2xl font-medium">
                Duplex sea facing for rent
              </h2>
              <p className="text-lg font-medium text-primary">$ 652.18</p>
              <p className="mt-2 text-sm text-neutral-content">
                Beautiful, updated, ground level Co-op apartment in the
                desirable Bay Terrace neighborhood
              </p>
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
          </Link>

          <Link to="" className="project_card">
            <div className="relative h-60 w-full overflow-hidden rounded-lg">
              <img src="/images/project2.jpg" alt="project" />

              <div className="absolute left-0 top-0 h-full w-full bg-black/30">
                <div className="absolute bottom-0 p-3">
                  <p className="flex items-center gap-2 text-[13px] text-base-100">
                    <FaMapMarkerAlt /> Gulshan, Dhaka
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3">
              <h2 className="text-2xl font-medium">
                Duplex sea facing for rent
              </h2>
              <p className="text-lg font-medium text-primary">$ 652.18</p>
              <p className="mt-2 text-sm text-neutral-content">
                Beautiful, updated, ground level Co-op apartment in the
                desirable Bay Terrace neighborhood
              </p>
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
          </Link>
        </div>
      </div>
    </section>
  );
}
