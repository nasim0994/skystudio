import { useEffect } from "react";
import { useGetPrivacyQuery } from "../../../Redux/privacy/privacyApi";
import parse from "html-react-parser";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: privacy } = useGetPrivacyQuery();
  const data = privacy?.data;

  const description = parse(data?.description || "");

  console.log(description);

  return (
    <section className="py-14">
      <div className="container">
        <div>
          <div className="mt-4">
            {Array.isArray(description) ? (
              description.map((item, index) => <div key={index}>{item}</div>)
            ) : (
              <div>{description}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
