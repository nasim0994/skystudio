import MainLayout from "../Layout/MainLayout";
import Aboutus from "../Pages/Main/Aboutus/Aboutus";
import Contactus from "../Pages/Main/Contactus/Contactus";
import Home from "../Pages/Main/Home/Home";
import PrivacyPolicy from "../Pages/Main/PrivacyPolicy/PrivacyPolicy";
import ProjectDetails from "../Pages/Main/ProjectDetails/ProjectDetails";
import Projects from "../Pages/Main/Projects/Projects";

export const mainRoutes = {
  id: "main",
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/project/:id",
      element: <ProjectDetails />,
    },
    {
      path: "/about-us",
      element: <Aboutus />,
    },
    {
      path: "/contact-us",
      element: <Contactus />,
    },
    {
      path: "/privacy-policy",
      element: <PrivacyPolicy />,
    },
  ],
};
