import Layout from "../components/layout/Layout"
import Ct01_7 from "../components/sections/Ct01_7"
import Ct01_8 from "../components/sections/Ct01_8"
import Features11_14 from "../components/sections/Features11_14"
import Features13_1 from "../components/sections/Features13_1"
import Features2_5 from "../components/sections/Features2_5"
import Features5_4 from "../components/sections/Features5_4"
import Hero5 from "../components/sections/Hero5"
import Lnk1_5 from "../components/sections/Lnk1_5"
import Lnk2_5 from "../components/sections/Lnk2_5"
import Statistic1_5 from "../components/sections/Statistic1_5"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="navbar-dark light-hero-header">
                <Hero5 />
                <Statistic1_5 />
                <hr className="divider" />
                <Features11_14 />
                <Lnk1_5 />
                <Features2_5 />
                <hr className="divider" />
                <Lnk2_5 />
                <Ct01_7 />
                <Ct01_8 />
                <Features13_1 />
                <Features5_4 />
            </Layout>
        </>
    )
}