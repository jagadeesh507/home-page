import Layout from "../components/layout/Layout"
import Banner7_7 from "../components/sections/Banner7_7"
import Ct01_28 from "../components/sections/Ct01_28"
import Ct02_44 from "../components/sections/Ct02_44"
import Ct02_45 from "../components/sections/Ct02_45"
import Ct04_16 from "../components/sections/Ct04_16"
import Features11_10 from "../components/sections/Features11_10"
import Features12_10 from "../components/sections/Features12_10"
import Features2_21 from "../components/sections/Features2_21"
import Hero5 from "../components/sections/Hero5"
import Lnk1_23 from "../components/sections/Lnk1_23"
import Lnk2_22 from "../components/sections/Lnk2_22"
import Reviews2_8 from "../components/sections/Reviews2_8"
import Statistic1_19 from "../components/sections/Statistic1_19"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="navbar-dark">
                <Hero5 />
                <hr className="divider" />
                <Lnk1_23 />
                <Ct01_28 />
                <Ct02_44 />
                <Features12_10 />
                <Statistic1_19 />
                <hr className="divider" />
                <Lnk2_22 />
                <Features11_10 />
                <Features2_21 />
                <hr className="divider" />
                <Ct04_16 />
                <Ct02_45 />
                <Reviews2_8 />
                <Banner7_7 />
                <hr className="divider" />
            </Layout>
        </>
    )
}