import { useParams } from "react-router-dom";
import parser from "html-react-parser";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useGetSingleServiceQuery } from "../../Redux/service/serviceApi";
import { useGetGalleryByServiceIdQuery } from "../../Redux/service/galleryApi";

export default function ServiceDetails() {
  window.scrollTo(0, 0);
  const { id } = useParams();
  const { data } = useGetSingleServiceQuery(id);
  const service = data?.data;

  const { data: gallery } = useGetGalleryByServiceIdQuery(id);
  const galleries = gallery?.data;

  return (
    <section className="min-h-[60vh] py-5">
      <div className="container">
        <div className="text-start">
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/${service?.image}`}
            alt="feature"
            className="max-h-60 w-full rounded object-cover sm:w-[500px]"
            loading="lazy"
          />
          <h2 className="mt-3 text-4xl font-medium">{service?.title}</h2>

          <div className="mt-2 text-neutral-content">
            {service?.description && parser(service?.description)}
          </div>
        </div>

        <div className="mt-6">
          <div className="rounded bg-primary px-4 py-2 text-center text-base-100">
            {service?.title} Gallery
          </div>

          <div className="mt-2 flex flex-col gap-5">
            {galleries?.map((gallery, i) => (
              <div key={i}>
                <h2 className="text-2xl font-medium text-primary">
                  {gallery?.category}
                </h2>

                <PhotoProvider>
                  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {gallery?.images.map((image, index) => (
                      <PhotoView
                        key={index}
                        src={`${import.meta.env.VITE_BACKEND_URL}/${image}`}
                      >
                        <img
                          src={`${import.meta.env.VITE_BACKEND_URL}/${image}`}
                          alt="gallery"
                          className="h-48 w-full rounded object-cover"
                          loading="lazy"
                        />
                      </PhotoView>
                    ))}
                  </div>
                </PhotoProvider>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
