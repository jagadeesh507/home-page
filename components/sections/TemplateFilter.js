// TemplateFilter.jsx

import React, { useEffect } from "react";
import { useRouter } from "next/router";

function TemplateFilter({ filter, setFilter }) {
  const TemplateName = [
    "All",
    "Layouts",
    "Landing",
    "Free",
    "Business",
    "Education",
    "Food",
    "Arts",
    "Portfolio",
    "Sport & Health",
    "Travel",
  ];

  const router = useRouter();

  useEffect(() => {
    const { name } = router.query;
    if (name) {
      setFilter(name);
    }
  }, [router.query]);

  const handleFilterByName = (name) => {
    setFilter(name);
    router.push(`/templates/?name=${encodeURIComponent(name)}`);
  };

  return (
    <section id="lnk-3" className="pt-100 ct-02 content-section division">
      <div className="container">
        <ul className="filter-items">
          {TemplateName.map((name) => (
            <li
              key={name}
              className={`individual-item ${filter === name ? "active" : ""}`}
              onClick={() => handleFilterByName(name)}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TemplateFilter;
