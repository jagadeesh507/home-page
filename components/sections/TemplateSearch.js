import React from "react";
import CardSlider from "../slider/CardSlider";
function TemplateSearch() {
  return (
    <>
      <div className="template-wow">
        <div className="template-heading">
          <h3>Explore creations in ContentQL</h3>
          <input
            type="text"
            placeholder="Search for your template"
            className="search-input"
          />
        </div>
        <div>
          <div className="template-scroll">
            <h6>Website Template</h6>
            <CardSlider />
          </div>
          <div className="template-scroll">
            <h6>Popup and alert templates</h6>
            <CardSlider />
          </div>
          <div className="template-scroll">
            <h6>Story Templates</h6>
            <CardSlider />
          </div>
        </div>
      </div>
    </>
  );
}

export default TemplateSearch;
