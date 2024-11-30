import "../../assets/css/approach.css";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useGetAllApproachQuery } from "../../Redux/approach/approachApi";

export default function OurApproach() {
  const [progress, setProgress] = useState(0);

  const { data, isLoading } = useGetAllApproachQuery();
  const allApproach = data?.data;

  const handleTabChange = (index) => {
    setProgress(((index + 1) / allApproach?.length) * 100);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <section className="py-10 pb-20">
      <div className="container">
        <div className="mb-8">
          <h2 className="text-center text-3xl font-semibold text-neutral sm:text-5xl">
            Our Approach
          </h2>
          <p className="mt-2 text-center text-sm text-neutral/70">
            Our working process is very easy; see it for yourself.
          </p>
        </div>

        <Tabs onSelect={handleTabChange}>
          <TabList>
            {allApproach?.map((tab, index) => (
              <Tab key={index}>{tab.title}</Tab>
            ))}
          </TabList>

          {allApproach?.map((tab, i) => (
            <TabPanel key={i}>
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/${tab?.image}`}
                className="fade-up-animation mx-auto mt-10 sm:w-[600px]"
                loading="lazy"
                alt={tab?.title}
              />

              {/* Progress bar */}
              <div className="relative mt-6">
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <div className="progress-percent absolute right-0 top-0 text-xl font-bold text-blue-500">
                  {Math.round(progress)}%
                </div>
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
