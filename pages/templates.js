import React from "react";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import { FaArrowRightLong } from "react-icons/fa6";
import { LiaPlusCircleSolid } from "react-icons/lia";
function Templates() {
  const templates = [
    {
      id: 1,
      name: "Template 1",
      backgroundImage: "images/template/template-1.png",
      design:
        "https://cloud.contentql.io/projects/20156605/editor/page/4837646",
      preview: "https://multiworkshop.resonateaes.com/",
      type: "pro",
    },
    {
      id: 2,
      name: "Template 2",
      backgroundImage: "images/template/template-2.png",
      design:
        "https://cloud.contentql.io/projects/20156900/editor/page/4837927",
      preview: "https://podcastlanding.resonateaes.com/",
      type: "pro",
    },
    {
      id: 3,
      name: "Template 3",
      backgroundImage: "images/template/template-3.png",
      design:
        "https://cloud.contentql.io/projects/20156911/editor/page/4837944",
      preview: "https://halbor.resonateaes.com/",
      type: "pro",
    },
    {
      id: 4,
      name: "Template 4",
      backgroundImage: "images/template/template-4.png",
      design:
        "https://cloud.contentql.io/projects/20156916/editor/page/4837953",
      preview: "https://gymtrainer.resonateaes.com/",
      type: "pro",
    },
    {
      id: 5,
      name: "Template 5",
      backgroundImage: "images/template/template-5.png",
      design:
        "https://cloud.contentql.io/projects/20156927/editor/page/4837964",
      preview: "https://restauranttemp.resonateaes.com/",
      type: "pro",
    },
    {
      id: 6,
      name: "Template 6",
      backgroundImage: "images/template/template-6.png",
      design:
        "https://cloud.contentql.io/projects/20156965/editor/page/4838044",
      preview: "https://subscriptionsales.resonateaes.com/",
      type: "pro",
    },
    {
      id: 7,
      name: "Template 7",
      backgroundImage: "images/template/template-7.png",
      design:
        "https://cloud.contentql.io/projects/20156973/editor/page/4838059",
      preview: "https://saaslandingpages.resonateaes.com/",
      type: "pro",
    },
    {
      id: 8,
      name: "Template 8",
      backgroundImage: "images/template/template-8.png",
      design:
        "https://cloud.contentql.io/projects/20156980/editor/page/4838077",
      preview: "https://portfoliopage.resonateaes.com/",
      type: "pro",
    },
    {
      id: 9,
      name: "Template 9",
      backgroundImage: "images/template/template-9.png",
      design:
        "https://cloud.contentql.io/projects/20156993/editor/page/4838089",
      preview: "https://petstore3.resonateaes.com/",
      type: "pro",
    },
    {
      id: 10,
      name: "Template 10",
      backgroundImage: "images/template/template-10.png",
      design:
        "https://cloud.contentql.io/projects/20157006/editor/page/4838120",
      preview: "https://cleanorz.resonateaes.com/",
      type: "pro",
    },
    {
      id: 11,
      name: "Template 11",
      backgroundImage: "images/template/template-11.png",
      design:
        "https://cloud.contentql.io/projects/20157023/editor/page/4838146",
      preview: "https://musictutor.resonateaes.com/",
      type: "pro",
    },
    {
      id: 12,
      name: "Template 12",
      backgroundImage: "images/template/template-12.png",
      design:
        "https://cloud.contentql.io/projects/20157027/editor/page/4838154",
      preview: "https://lounchpodcast.resonateaes.com/",
      type: "pro",
    },
    {
      id: 13,
      name: "Template 13",
      backgroundImage: "images/template/template-13.png",
      design:
        "https://cloud.contentql.io/projects/20157036/editor/page/4838162",
      preview: "https://nursery.resonateaes.com/",
      type: "pro",
    },
    {
      id: 14,
      name: "Template 14",
      backgroundImage: "images/template/template-14.png",
      design:
        "https://cloud.contentql.io/projects/20157044/editor/page/4838179",
      preview: "https://dancetutor.resonateaes.com/",
      type: "pro",
    },
    {
      id: 15,
      name: "Template 15",
      backgroundImage: "images/template/template-15.png",
      design:
        "https://cloud.contentql.io/projects/20157052/editor/page/4838187",
      preview: "https://dojosensei.resonateaes.com/",
      type: "pro",
    },
    {
      id: 16,
      name: "Template 16",
      backgroundImage: "images/template/template-16.png",
      design:
        "https://cloud.contentql.io/projects/20157062/editor/page/4838204",
      preview: "https://linoor.resonateaes.com/",
      type: "pro",
    },
    {
      id: 17,
      name: "Template 17",
      backgroundImage: "images/template/template-17.png",
      design:
        "https://cloud.contentql.io/projects/20157077/editor/page/4838229",
      preview: "https://growth2.resonateaes.com/",
      type: "pro",
    },
    {
      id: 18,
      name: "Template 18",
      backgroundImage: "images/template/template-18.png",
      design:
        "https://cloud.contentql.io/projects/20157092/editor/page/4838244",
      preview: "https://yoganew.resonateaes.com/",
      type: "pro",
    },
    {
      id: 19,
      name: "Template 19",
      backgroundImage: "images/template/template-19.png",
      design:
        "https://cloud.contentql.io/projects/20157098/editor/page/4838252",
      preview: "https://trefon.resonateaes.com/",
      type: "pro",
    },
    {
      id: 20,
      name: "Template 20",
      backgroundImage: "images/template/template-20.png",
      design:
        "https://cloud.contentql.io/projects/20157124/editor/page/4838280",
      preview: "https://travely.resonateaes.com/",
      type: "pro",
    },
    {
      id: 21,
      name: "Template 21",
      backgroundImage: "images/template/template-21.png",
      design:
        "https://cloud.contentql.io/projects/20157403/editor/page/4838604",
      preview: "https://telemed.resonateaes.com/",
      type: "pro",
    },
    {
      id: 22,
      name: "Template 22",
      backgroundImage: "images/template/template-22.png",
      design:
        "https://cloud.contentql.io/projects/20157423/editor/page/4838632",
      preview: "https://tattooshop.resonateaes.com/",
      type: "pro",
    },
    {
      id: 23,
      name: "Template 23",
      backgroundImage: "images/template/template-23.png",
      design:
        "https://cloud.contentql.io/projects/20157439/editor/page/4838656",
      preview: "https://sushi.resonateaes.com/",
      type: "pro",
    },
  ];
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls="navbar-dark inner-page-header"
      >
        <div id="page" className="page-wrapper">
          <section
            id="select"
            className="bg-fixed select-section template-select"
          >
            <div className="container">
              <div className="row">
                {/* LAYOUT-1 */}
                <div
                  id="l-0"
                  className="col-md-6 col-lg-4 select_link wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="hover-overlay card-view">
                    <span className="react-icon">
                      <LiaPlusCircleSolid size={40} />
                    </span>
                    <div className="text-container">
                      <div className="text-wow">
                        <Link
                          href="https://cloud.contentql.io/projects/20157161/editor/page/4838335"
                          target="_blank"
                        >
                          Go with this design
                        </Link>{" "}
                      </div>
                    </div>
                  </div>
                  <h4> Start from Scratch</h4>
                </div>
                {templates.map((template) => (
                  <div
                    key={template.id}
                    id="l-1"
                    className="col-md-6 col-lg-4 select_link wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="hover-overlay card-view">
                      <img
                        className="img-fluid"
                        src={template.backgroundImage}
                        alt="layout-preview"
                      />
                      <div className="text-container">
                        <div className="text-wow">
                          <Link href={template.design} target="_blank">
                            Go with this design
                          </Link>{" "}
                        </div>
                        <div className="text-wow">
                          <Link href={template.preview} target="_blank">
                            preview Design
                          </Link>
                        </div>
                      </div>
                      <p className="payment-type">{template.type}</p>
                    </div>
                    <h4> {template.name}</h4>
                  </div>
                ))}
              </div>{" "}
            </div>{" "}
          </section>{" "}
        </div>
      </Layout>
    </>
  );
}

export default Templates;
