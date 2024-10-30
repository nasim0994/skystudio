import { lazy, Suspense } from "react";
import MainLayout from "../Layout/MainLayout";
import Spinner from "../Components/Spinner/Spinner";
import Home from "../Pages/Main/Home/Home";

// Lazy loading the components
const FAQPage = lazy(() => import("../Pages/Main/FAQPage"));
const ServicesPage = lazy(() => import("../Pages/Main/ServicesPage"));
const Aboutus = lazy(() => import("../Pages/Main/Aboutus/Aboutus"));
const Contactus = lazy(() => import("../Pages/Main/Contactus/Contactus"));

export const mainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/services",
      element: (
        <Suspense fallback={<Spinner />}>
          <ServicesPage />
        </Suspense>
      ),
    },
    {
      path: "/about-us",
      element: (
        <Suspense fallback={<Spinner />}>
          <Aboutus />
        </Suspense>
      ),
    },
    {
      path: "/contact-us",
      element: (
        <Suspense fallback={<Spinner />}>
          <Contactus />
        </Suspense>
      ),
    },
    {
      path: "/faq",
      element: (
        <Suspense fallback={<Spinner />}>
          <FAQPage />
        </Suspense>
      ),
    },
  ],
};
