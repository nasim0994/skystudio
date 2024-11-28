import "../../assets/css/approach.css";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const tabsData = [
  {
    title: "Our Approach",
    image: "/images/approce/1.png",
  },
  {
    title: "Our Vision",
    image: "/images/approce/2.webp",
  },
  {
    title: "Our Mission",
    image: "/images/approce/3.svg",
  },
  {
    title: "Our Values",
    image: "/images/approce/4.webp",
  },
  {
    title: "Our Goals",
    image: "/images/approce/5.webp",
  },
];

export default function OurApproach() {
  const [progress, setProgress] = useState(0);

  useState(() => {
    setProgress((1 / tabsData.length) * 100);
  }, []);

  const handleTabChange = (index) => {
    setProgress(((index + 1) / tabsData?.length) * 100);
  };

  return (
    <section className="py-10 pb-20">
      <div className="container">
        <Tabs onSelect={handleTabChange}>
          <TabList>
            {tabsData.map((tab, index) => (
              <Tab key={index}>{tab.title}</Tab>
            ))}
          </TabList>

          {tabsData?.map((tab, i) => (
            <TabPanel key={i}>
              <img
                src={tab?.image}
                className="fade-up-animation mx-auto mt-10 sm:w-[600px]"
                alt=""
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
