import Layout from "../components/layout/Layout";
import Banner13_1 from "../components/sections/Banner13_1";
import Brands1_1 from "../components/sections/Brands1_1";
import Ct02_1 from "../components/sections/Ct02_1";
import Ct02_2 from "../components/sections/Ct02_2";
import Faqs3_1 from "../components/sections/Faqs3_1";
import Features12_1 from "../components/sections/Features12_1";
import Features2_1 from "../components/sections/Features2_1";
import Features5_1 from "../components/sections/Features5_1";
import Features6_1 from "../components/sections/Features6_1";
import Hero15 from "../components/sections/Hero15";
import Integrations2_1 from "../components/sections/Integrations2_1";
import Lnk2_1 from "../components/sections/Lnk2_1";
import Lnk3_1 from "../components/sections/Lnk3_1";
import Rating1_1 from "../components/sections/Rating1_1";
import Reviews1_1 from "../components/sections/Reviews1_1";
import Statistic1_1 from "../components/sections/Statistic1_1";
import TemplateDesigns from "../components/sections/templae-designs";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls="navbar-dark light-hero-header"
      >
        <Hero15 />
        <Features6_1 />
        <hr className="divider" />
        <Features5_1 />
        <Statistic1_1 />
        <hr className="divider" />
        <Lnk2_1 />
        <Features12_1 />
        <Ct02_1 />
        <Lnk3_1 />
        <Brands1_1 />
        <hr className="divider" />
        <Features2_1 />
        <hr className="divider" />
        <Ct02_2 />
        <TemplateDesigns />
        <Reviews1_1 />
        <Rating1_1 />
        <Integrations2_1 />
        <Faqs3_1 />
        <Banner13_1 />
      </Layout>
    </>
  );
}
