// Templates.jsx

import Link from "next/link";
import React, { useState } from "react";
import { LiaPlusCircleSolid } from "react-icons/lia";
import Layout from "../components/layout/Layout";
import { websiteTemplates } from "../mockdata/websiteTemplates";

function Templates() {


  // const searchParams = useSearchParams();
  // const [filter, setFilter] = useState(
  //   searchParams.get("category") ? searchParams.get("category") : ""
  // );
  // const filterByName = (template) => {
  //   if (filter === "All") return true;
  //   return template.category.toLowerCase().includes(filter.toLowerCase());
  //};

  const [currentPage, setCurrentPage] = useState(1);
  const templatesPerPage = 14;

  const indexOfLastTemplate = currentPage * templatesPerPage;
  const indexOfFirstTemplate = indexOfLastTemplate - templatesPerPage;
  const currentTemplates = websiteTemplates
    .slice(indexOfFirstTemplate, indexOfLastTemplate);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls="navbar-dark inner-page-header"
      >
        {/* <TemplateFilter filter={filter} setFilter={setFilter} /> */}

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
                          href="https://cloud.contentql.io/projects/create"
                          target="_blank"
                        >
                          Go with this design
                        </Link>{" "}
                      </div>
                    </div>
                  </div>
                  <h4> Start from Scratch</h4>
                </div>
                {currentTemplates.map((template) => (
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
              </div>
              <div className="row">
                <ul className="pagination">
                  {Array.from(
                    {
                      length: Math.ceil(
                        websiteTemplates.length / templatesPerPage
                      ),
                    },
                    (_, i) => (
                      <li key={i} className="page-item">
                        <a
                          onClick={() => paginate(i + 1)}
                          href="#"
                          className="page-link"
                        >
                          {i + 1}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>{" "}
          </section>{" "}
        </div>
      </Layout>
    </>
  );
}

export default Templates;
