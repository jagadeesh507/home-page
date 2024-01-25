import Link from "next/link";
import { useRouter } from "next/router";
import { SiSpringCreators } from "react-icons/si";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { MdOutlinePublish } from "react-icons/md";
import { IoBusinessOutline } from "react-icons/io5";

export default function Menu() {
  const router = useRouter();

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
                <SiSpringCreators size={24} />
                For Creators
              </Link>
            </li>
            <li aria-haspopup="true">
              <Link href="#lnk-2">
                <MdOutlinePublish size={24} />
                For publishers
              </Link>
            </li>
            <li aria-haspopup="true">
              <Link href="#lnk-3">
                <IoBusinessOutline size={24} />
                For Business
              </Link>
            </li>
            <li aria-haspopup="true">
              <Link href="#features-2">
                <MdOutlineDeveloperMode size={24} />
                For Developers
              </Link>
            </li>
          </ul>
        </li>
        {/* SIMPLE NAVIGATION LINK */}
        <li className="nl-simple" aria-haspopup="true">
          <Link href="#features-6" className="h-link">
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
                <ul className="col-md-12 col-lg-3 link-list">
                  <li className="fst-li">
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/team">Our Team</Link>
                  </li>
                  <li>
                    <Link href="/careers">
                      Careers <span className="sm-info">4</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/career-role">Career Details</Link>
                  </li>
                  <li>
                    <Link href="/contacts">Contact Us</Link>
                  </li>
                </ul>
                {/* MEGAMENU LINKS */}
                <ul className="col-md-12 col-lg-3 link-list">
                  <li>
                    <Link href="/features">Core Features</Link>
                  </li>
                  <li className="fst-li">
                    <Link href="/projects">Our Projects</Link>
                  </li>
                  <li>
                    <Link href="/project-details">Project Details</Link>
                  </li>
                  <li>
                    <Link href="/reviews">Testimonials</Link>
                  </li>
                  <li>
                    <Link href="/download">Download Page</Link>
                  </li>
                </ul>
                {/* MEGAMENU LINKS */}
                <ul className="col-md-12 col-lg-3 link-list">
                  <li className="fst-li">
                    <Link href="/pricing-1">Pricing Page #1</Link>
                  </li>
                  <li>
                    <Link href="/pricing-2">Pricing Page #2</Link>
                  </li>
                  <li>
                    <Link href="/faqs">FAQs Page</Link>
                  </li>
                  <li>
                    <Link href="/help-center">Help Center</Link>
                  </li>
                  <li>
                    <Link href="/404">404 Page</Link>
                  </li>
                </ul>
                {/* MEGAMENU LINKS */}
                <ul className="col-md-12 col-lg-3 link-list">
                  <li className="fst-li">
                    <Link href="/blog-listing">Blog Listing</Link>
                  </li>
                  <li>
                    <Link href="/single-post">Single Blog Post</Link>
                  </li>
                  <li>
                    <Link href="/login-2">Login Page</Link>
                  </li>
                  <li>
                    <Link href="/signup-2">Signup Page</Link>
                  </li>
                  <li>
                    <Link href="/reset-password">Reset Password</Link>
                  </li>
                </ul>
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* End container */}
          </div>{" "}
          {/* End wsmegamenu */}
        </li>{" "}
        {/* END MEGAMENU */}
        {/* SIMPLE NAVIGATION LINK */}
        <li className="nl-simple" aria-haspopup="true">
          <Link href="/pricing-1" className="h-link">
            Pricing
          </Link>
        </li>
        <li
          className="nl-simple reg-fst-link mobile-last-link"
          aria-haspopup="true"
        >
          <Link href="/login-2" className="h-link">
            Sign in
          </Link>
        </li>
        <li
          className="nl-simple reg-fst-link mobile-last-link"
          aria-haspopup="true"
        >
          <Link href="/templates" className="h-link">
            Templates
          </Link>
        </li>
        {/* SIGN UP BUTTON */}
        <li className="nl-simple" aria-haspopup="true">
          <Link
            href="/signup-2"
            className="btn r-04 btn--theme hover--tra-white last-link"
          >
            Sign up
          </Link>
        </li>
      </ul>
    </>
  );
}
