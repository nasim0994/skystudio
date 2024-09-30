import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export default function Gallery() {
  return (
    <section className="bg-slate-100 py-14">
      <div className="container">
        <PhotoProvider>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="7px">
              <PhotoView src="/images/project1.jpg">
                <img src="/images/project1.jpg" alt="" />
              </PhotoView>
              <PhotoView src="/images/project3.jpg">
                <img src="/images/project3.jpg" alt="" />
              </PhotoView>
              <PhotoView src="/images/project2.jpg">
                <img src="/images/project2.jpg" alt="" />
              </PhotoView>
              <PhotoView src="/images/project4.jpg">
                <img src="/images/project4.jpg" alt="" />
              </PhotoView>
              <PhotoView src="/images/project2.jpg">
                <img src="/images/project2.jpg" alt="" />
              </PhotoView>
              <PhotoView src="/images/project4.jpg">
                <img src="/images/project4.jpg" alt="" />
              </PhotoView>
            </Masonry>
          </ResponsiveMasonry>
        </PhotoProvider>
      </div>
    </section>
  );
}
