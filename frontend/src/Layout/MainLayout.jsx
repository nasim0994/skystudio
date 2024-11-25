import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import CircularProgress from "../Components/ProgressScroll/ProgressScroll";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="bg-[#FFFAF4]">
        <Outlet />
      </main>
      <Footer />

      <CircularProgress />
    </>
  );
}
