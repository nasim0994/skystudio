import { Link } from "react-router-dom";
import "../../../assets/css/project.css";

export default function Projects() {
  return (
    <section className="mt-[70vh] sm:mt-[84vh]">
      <div className="container">
        <div className="text-center">
          <h2 className="fonr-medium text-3xl">On Sale Projects</h2>
          <p className="text-center text-neutral-content">
            Luxury, Location & Lifestyle
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-3 lg:mx-10">
          <Link to="/project/1" className="project_big_card">
            <div className="relative h-[500px] w-full overflow-hidden rounded">
              <img src="/images/project3.jpg" alt="project" />

              <div className="project_content">
                <p>Sheltech Winter Berry</p>
                <p>Project Address : Plot 51, Road 4/A,</p>
              </div>
            </div>
          </Link>
          <Link to="" className="project_big_card">
            <div className="relative h-[500px] w-full overflow-hidden rounded">
              <img src="/images/project4.jpg" alt="project" />

              <div className="project_content">
                <p>Sheltech Winter Berry</p>
                <p>Project Address : Plot 51, Road 4/A,</p>
              </div>
            </div>
          </Link>
          <Link to="" className="project_big_card">
            <div className="relative h-[500px] w-full overflow-hidden rounded">
              <img src="/images/project2.jpg" alt="project" />

              <div className="project_content">
                <p>Sheltech Winter Berry</p>
                <p>Project Address : Plot 51, Road 4/A,</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-6 flex justify-center">
          <Link to="" className="primary_btn">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
