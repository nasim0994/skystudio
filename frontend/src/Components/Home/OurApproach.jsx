export default function OurApproach() {
  return (
    <section className="py-10 pb-20">
      <div className="container">
        <h2 className="text-center text-5xl font-medium">Our Approach</h2>

        <div className="mt-20 flex flex-col items-center justify-center gap-10 sm:flex-row">
          <div className="process_card">
            <div className="process_icon">
              <img src="/images/ap1.png" alt="" />
            </div>
            <p className="font-medium text-neutral">Meet and Greet</p>
          </div>

          <div className="process_card">
            <div className="process_icon">
              <img src="/images/ap2.png" alt="" />
            </div>
            <p className="font-medium text-neutral">Design Development</p>
          </div>

          <div className="process_card">
            <div className="process_icon">
              <img src="/images/ap3.png" alt="" />
            </div>
            <p className="font-medium text-neutral">Place Your Order</p>
          </div>

          <div className="process_card">
            <div className="process_icon">
              <img src="/images/ap4.png" alt="" />
            </div>
            <p className="font-medium text-neutral">Installation Process</p>
          </div>

          <div className="process_card">
            <div className="process_icon">
              <img src="/images/ap5.png" alt="" />
            </div>
            <p className="font-medium text-neutral">You Moving In</p>
          </div>
        </div>
      </div>
    </section>
  );
}
