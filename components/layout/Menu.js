import Link from "next/link";
import { useRouter } from "next/router";
import { SiSpringCreators } from "react-icons/si";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { MdOutlinePublish } from "react-icons/md";
import { IoBusinessOutline } from "react-icons/io5";
import { FaAffiliatetheme } from "react-icons/fa";
import { IoIosCode } from "react-icons/io";
import { GoBook } from "react-icons/go";
import { TbHelpCircle } from "react-icons/tb";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

export default function Menu() {
  const router = useRouter();
  const parser = new DOMParser();

  const Resources1 = [
    {
      title: "Marketplace",
      description:
        "Professional themes, custom integrations and qualifed experts",
      path: "/about",
      icon: <MdOutlineFeaturedPlayList size={26} />,
    },
    {
      title: "Themes",
      description: "Hundreds of beautifully designed publication templates",
      path: "/about",
      icon: <FaAffiliatetheme size={26} />,
    },
    {
      title: "Integrations",
      description: "Connect thousands of apps and services with your website",
      path: "/about",
      icon: <MdOutlineIntegrationInstructions size={26} />,
    },
    {
      title: "Experts",
      description:
        "Get help building your site from certified ContentQL developers",
      path: "/about",
      icon: <IoIosCode size={26} />,
    },
  ];
  const resources2 = [
    {
      title: "Start here",
      description:
        "A huge library of guides, stories, interviews and tips for success",
      path: "/about",
      icon: <GoBook size={26} />,
    },
    {
      title: "Help center",
      description:
        "Get help from product features and answers to common questions",
      path: "/about",
      icon: <TbHelpCircle size={26} />,
    },
    {
      title: "Product updates",
      description: "all the latest changes and improvements to contentQL",
      path: "/about",
      icon: <MdOutlineSystemUpdateAlt size={26} />,
    },
    {
      title: "About us",
      description:
        "Learn more about the people behind the platform (we're hiring)",
      path: "/about",
      icon: <AiFillEdit size={26} />,
    },
  ];

  return (
    <>
      <ul className="wsmenu-list nav-theme">
        {/* DROPDOWN SUB MENU */}
        <li aria-haspopup="true">
          <Link href="#" className="h-link">
            Product <span className="wsarrow" />
          </Link>
          <ul className="sub-menu">
            <li aria-haspopup="true">
              <Link href="#lnk-1">
                <span>
                  <SiSpringCreators size={26} />
                </span>
                For Creators
              </Link>
            </li>
            <li aria-haspopup="true">
              <Link href="#lnk-2">
                <span>
                  <MdOutlinePublish size={26} />
                </span>
                For publishers
              </Link>
            </li>
            <li aria-haspopup="true">
              <Link href="#lnk-3">
                <span>
                  {" "}
                  <IoBusinessOutline size={26} />
                </span>
                For Business
              </Link>
            </li>
            <li aria-haspopup="true">
              <Link href="#features-2">
                <span>
                  {" "}
                  <MdOutlineDeveloperMode size={32} />
                </span>
                For Developers
              </Link>
            </li>
          </ul>
        </li>
        {/* SIMPLE NAVIGATION LINK */}
        <li className="nl-simple" aria-haspopup="true">
          <Link href="/explore" className="h-link">
            Explore
          </Link>
        </li>
        {/* MEGAMENU */}
        <li aria-haspopup="true" className="mg_link">
          <Link href="#" className="h-link">
            Resources <span className="wsarrow" />
          </Link>
          <div className="wsmegamenu w-75 clearfix">
            <div className="container">
              <div className="row">
                {/* MEGAMENU LINKS */}
                <ul className="col-md-12 col-lg-6 link-list">
                  {Resources1.map((resource) => (
                    <li className="fst-li">
                      <Link href={resource.path}>
                        <div className="navbar-icon">
                          <div className="icon">{resource.icon}</div>

                          <div>
                            {" "}
                            <p className="navitem-title">{resource.title}</p>
                            <span className="navitem-description">
                              {resource.description}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="col-md-12 col-lg-6 link-list">
                  {resources2.map((navitem) => (
                    <li className="fst-li">
                      <Link href={navitem.path}>
                        <div className="navbar-icon">
                          <div className="icon">{navitem.icon}</div>
                          <div>
                            {" "}
                            <p className="navitem-title">{navitem.title}</p>
                            <span className="navitem-description">
                              {navitem.description}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
                {/* MEGAMENU LINKS */}
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* End container */}
          </div>{" "}
          {/* End wsmegamenu */}
        </li>{" "}
        {/* END MEGAMENU */}
        {/* SIMPLE NAVIGATION LINK */}
        <li
          className="nl-simple reg-fst-link mobile-last-link"
          aria-haspopup="true"
        >
          <Link href="/templates" className="h-link">
            Templates
          </Link>
        </li>
        <li className="nl-simple" aria-haspopup="true">
          <Link href="/pricing-1" className="h-link">
            Pricing
          </Link>
        </li>
        {/* SIGN UP BUTTON */}
        <li className="nl-simple" aria-haspopup="true">
          <Link
            href="/login-2"
            className="btn r-04 btn--theme hover--tra-black last-link"
          >
            Sign in
          </Link>
        </li>
      </ul>
    </>
  );
}
