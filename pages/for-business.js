import Layout from "../components/layout/Layout"
import Banner3_6 from "../components/sections/Banner3_6"
import Brands1_22 from "../components/sections/Brands1_22"
import Ct01_36 from "../components/sections/Ct01_36"
import Ct01_37 from "../components/sections/Ct01_37"
import Ct02_51 from "../components/sections/Ct02_51"
import Features12_11 from "../components/sections/Features12_11"
import Features7_5 from "../components/sections/Features7_5"
import Hero27 from "../components/sections/Hero27"
import Lnk1_25 from "../components/sections/Lnk1_25"
import Lnk1_27 from "../components/sections/Lnk1_27"
import Lnk2_26 from "../components/sections/Lnk2_26"
import Rating1_11 from "../components/sections/Rating1_11"
import Reviews1_13 from "../components/sections/Reviews1_13"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="navbar-dark light-hero-header">
                <Hero27 />
                <Lnk1_27 />
                <Lnk1_25 />
                <Ct01_36 />
                <Features7_5 />
                <Ct02_51 />
                <Lnk2_26 />
                <Brands1_22 />
                <hr className="divider" />
                <Features12_11 />
                <hr className="divider" />
                <Ct01_37 />
                <Reviews1_13 />
                <Rating1_11 />
                <Banner3_6 />
            </Layout>
        </>
    )
}