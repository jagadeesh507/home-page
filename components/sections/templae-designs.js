import React from "react";
import Link from "next/link";
function TemplateDesigns() {
  return (
    <div id="page" className="page-wrapper">
      <section id="select" className="bg-fixed select-section">
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row">
            <div className="col-lg-10 offset-lg-1 section-title">
              <h2 className="heading">Stunning Designs</h2>
            </div>
          </div>
          {/* DEMOS WRAPPER */}
          <div className="row">
            {/* LAYOUT-1 */}
            <div
              id="l-1"
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="hover-overlay">
                <Link href="/demo-1" target="_blank">
                  <img
                    className="img-fluid"
                    src="/images/demo/layout-01.jpg"
                    alt="layout-1-preview"
                  />
                </Link>
              </div>
              <h4>Template 1</h4>
            </div>
            {/* LAYOUT-2 */}
            <div
              id="l-2"
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="hover-overlay">
                <Link href="/demo-2" target="_blank">
                  <img
                    className="img-fluid"
                    src="/images/demo/layout-02.jpg"
                    alt="layout-2-preview"
                  />
                </Link>
              </div>
              <h4> Template 2</h4>
            </div>
            {/* LAYOUT-3 */}
            <div
              id="l-3"
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="hover-overlay">
                <Link href="/demo-3" target="_blank">
                  <img
                    className="img-fluid"
                    src="/images/demo/layout-03.jpg"
                    alt="layout-3-preview"
                  />
                </Link>
              </div>
              <h4>Template 3</h4>
            </div>
          </div>{" "}
          {/* END DEMOS WRAPPER */}
        </div>{" "}
        {/* End container */}
        <div className="row">
          <div className="col">
            <div className="more-btn text-center mt-60 wow fadeInUp">
              <Link
                href="/templates"
                className="btn btn--tra-black hover--theme"
              >
                View all Templates
              </Link>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* END SELECT */}
      {/* BANNER-1
============================================= */}
    </div>
  );
}

export default TemplateDesigns;
