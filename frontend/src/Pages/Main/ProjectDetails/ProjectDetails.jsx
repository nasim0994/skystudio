import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaBath, FaBed } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import Swal from "sweetalert2";
import {
  useGetProjectByIdQuery,
  useGetRecentProjectsQuery,
} from "../../../Redux/projects/projectsApi";
import parse from "html-react-parser";
import { PhotoProvider, PhotoView } from "react-photo-view";

export default function ProjectDetails() {
  const { id } = useParams();
  const { data: projectData, error, isLoading } = useGetProjectByIdQuery(id);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = projectData?.data?.title || "Project Details - GHL";
  }, [projectData]);

  const { data } = useGetRecentProjectsQuery();

  const recentProjects = data?.data;

  const truncateDescription = (description, maxLength = 100) => {
    const stripHtmlTags = (html) => {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;
      return tempDiv.textContent || tempDiv.innerText || "";
    };

    const plainText = stripHtmlTags(description);
    const truncatedText =
      plainText.length > maxLength
        ? plainText.substring(0, maxLength) + "..."
        : plainText;

    return truncatedText;
  };

  console.log(recentProjects);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    Swal.fire("", "Failed to load project details", "error");
    return <div>Error loading project details.</div>;
  }

  const project = projectData?.data;
  if (!project) {
    return <div>Project not found</div>;
  }

  const { title, price, bed, bath, sqft, description, image, gallery } =
    project;

  return (
    <section className="py-10">
      <div className="container">
        <div className="grid items-start gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <div>
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/${image}`}
                alt="project"
                className="h-56 w-full rounded-md sm:h-[360px]"
              />
            </div>

            <div className="flex items-center gap-3 border-t p-3 text-xs">
              <div className="flex items-center gap-2 border-r pr-3">
                <p className="text-secondary">
                  <FaBed className="text-base" />
                </p>
                <p>{bed} Beds</p>
              </div>

              <div className="flex items-center gap-2 border-r pr-3">
                <p className="text-secondary">
                  <FaBath className="text-base" />
                </p>
                <p>{bath} Bath</p>
              </div>

              <div className="flex items-center gap-2">
                <p className="text-secondary">
                  <MdSpaceDashboard className="text-base" />
                </p>
                <p>{sqft} sqft</p>
              </div>
            </div>

            <div className="mt-2">
              <h2 className="text-2xl font-medium md:text-4xl">{title}</h2>
              <h3 className="mt-1 text-lg font-medium text-primary md:text-xl">
                ${price}
              </h3>
              <p className="mt-2 text-xs text-neutral-content md:text-sm">
                {parse(description)}
              </p>
            </div>

            <div className="mt-2">
              <h2 className="text-2xl font-medium text-neutral">
                Photo Gallery
              </h2>
              <div className="mt-2 grid grid-cols-3 gap-4">
                <PhotoProvider>
                  {gallery &&
                    gallery.map((img, index) => (
                      <PhotoView
                        key={img?._id}
                        src={`${import.meta.env.VITE_BACKEND_URL}/${img}`}
                      >
                        <img
                          key={index}
                          src={`${import.meta.env.VITE_BACKEND_URL}/${img}`}
                          alt={`gallery ${index}`}
                          className="h-full w-full rounded"
                        />
                      </PhotoView>
                    ))}
                </PhotoProvider>
              </div>
            </div>
          </div>
          <div>
            <h2 className="-mt-2 text-2xl font-medium">Recent Projects</h2>
            {recentProjects?.map((recentProject) => (
              <Link
                to={`/project/${recentProject?._id}`}
                key={recentProject?._id}
                className="mt-2 flex flex-col gap-6"
              >
                <div className="flex gap-4 md:gap-2">
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}/${recentProject?.image}`}
                    alt="project"
                    className="h-16 w-[100px] rounded-md"
                  />
                  <div>
                    <h3 className="text-sm font-medium md:text-lg">
                      {recentProject?.title}
                    </h3>

                    <p className="mt-1 text-[10px] text-neutral-content md:text-xs">
                      {truncateDescription(recentProject?.description, 68)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
