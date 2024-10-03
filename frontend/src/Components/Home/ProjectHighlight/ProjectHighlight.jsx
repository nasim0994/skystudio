import parser from "html-react-parser";
import { useGetHighlightProjectQuery } from "../../../Redux/highlightProject/highlightProjectApi";

export default function ProjectHighlight() {
  const { data } = useGetHighlightProjectQuery();

  const highlightProject = data?.data;
  const description =
    highlightProject?.description && parser(highlightProject?.description);

  return (
    <section className="py-10">
      <div className="container">
        <div className="grid md:grid-cols-2 items-center gap-4 md:gap-10">
          <div>
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/${highlightProject?.image}`}
              alt=""
            />
          </div>

          <div>
            <h2 className="text-4xl md:text-6xl font-medium uppercase text-neutral">
              {highlightProject?.title}
            </h2>

            <p className="mt-1.5 md:mt-3 text-[8px] md:text-[15px] text-neutral-content">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
