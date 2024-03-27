import Link from "next/link"
import CounterUp from "../components/elements/CounterUp"
import VideoPopup from "../components/elements/VidepPopup"
import Layout from "../components/layout/Layout"
import Integrations1_8 from "../components/sections/Integrations1_8"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="navbar-dark inner-page-header">
                <div>
                    <section className="gr--whitesmoke ct-08 inner-page-hero content-section division">
                        <div className="container">
                            {/* SECTION TITLE */}
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-9">
                                    <div className="section-title mb-70">
                                        {/* Title */}
                                        <h2 className="s-52 w-700">Integrate with your essential tools in few clicks</h2>
                                        {/* Text */}
                                        <p className="s-21">Ligula risus auctor tempus magna feugiat lacinia.</p>
                                    </div>
                                </div>
                            </div>
                            {/* IMAGE BLOCK */}
                            <div className="row">
                                <div className="col">
                                    <div className="img-block video-preview wow fadeInUp">
                                        {/* Play Icon */}
                                        <VideoPopup style={2} />
                                        {/* Preview Image */}
                                        <img className="img-fluid" src="/images/dashboard-06.png" alt="video-preview" />
                                    </div>
                                </div>
                            </div>
                        </div>	   {/* End container */}
                    </section>	{/* END IMAGE CONTENT */}
                    {/* STATISTIC-1
			============================================= */}
                    <div id="statistic-1" className="py-100 statistic-section division">
                        <div className="container">
                            {/* STATISTIC-1 WRAPPER */}
                            <div className="statistic-1-wrapper">
                                <div className="row justify-content-md-center row-cols-1 row-cols-md-3">
                                    {/* STATISTIC BLOCK #1 */}
                                    <div className="col">
                                        <div id="sb-1-1" className="wow fadeInUp">
                                            <div className="statistic-block">
                                                {/* Digit */}
                                                <div className="statistic-block-digit text-center">
                                                    <h2 className="s-46 statistic-number"><CounterUp end={89} />k</h2>
                                                </div>
                                                {/* Text */}
                                                <div className="statistic-block-txt color--grey">
                                                    <p className="p-md">Porta justo integer and velna vitae auctor</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	{/* END STATISTIC BLOCK #1 */}
                                    {/* STATISTIC BLOCK #2 */}
                                    <div className="col">
                                        <div id="sb-1-2" className="wow fadeInUp">
                                            <div className="statistic-block">
                                                {/* Digit */}
                                                <div className="statistic-block-digit text-center">
                                                    <h2 className="s-46 statistic-number"><CounterUp end={76} />%</h2>
                                                </div>
                                                {/* Text */}
                                                <div className="statistic-block-txt color--grey">
                                                    <p className="p-md">Ligula magna suscipit vitae and rutrum</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	{/* END STATISTIC BLOCK #2 */}
                                    {/* STATISTIC BLOCK #3 */}
                                    <div className="col">
                                        <div id="sb-1-3" className="wow fadeInUp">
                                            <div className="statistic-block">
                                                {/* Digit */}
                                                <div className="statistic-block-digit text-center">
                                                    <h2 className="s-46 statistic-number">
                                                        <CounterUp end={4} />.<CounterUp end={93} />
                                                    </h2>
                                                </div>
                                                {/* Text */}
                                                <div className="statistic-block-txt color--grey">
                                                    <p className="p-md">Sagittis congue augue egestas an egestas</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	{/* END STATISTIC BLOCK #3 */}
                                </div>  {/* End row */}
                            </div>	{/* END STATISTIC-1 WRAPPER */}
                        </div>	 {/* End container */}
                    </div>	 {/* END STATISTIC-1 */}
                    {/* DIVIDER LINE */}
                    <hr className="divider" />
                    {/* TEXT CONTENT
			============================================= */}
                    <section className="pt-100 ct-01 content-section division">
                        <div className="container">
                            {/* SECTION CONTENT (ROW) */}
                            <div className="row d-flex align-items-center">
                                {/* TEXT BLOCK */}
                                <div className="col-md-6 order-last order-md-2">
                                    <div className="txt-block left-column wow fadeInRight">
                                        {/* Section ID */}
                                        <span className="section-id">Productivity Focused</span>
                                        {/* Title */}
                                        <h2 className="s-46 w-700">Achieve more with better workflows</h2>
                                        {/* Text */}
                                        <p>Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis
                                            vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit
                                        </p>
                                        {/* List */}
                                        <ul className="simple-list">
                                            <li className="list-item">
                                                <p>Tempor sapien quaerat an ipsum laoreet purus and sapien dolor an ultrice
                                                    ipsum aliquam undo congue dolor cursus
                                                </p>
                                            </li>
                                            <li className="list-item">
                                                <p className="mb-0">Cursus purus suscipit vitae cubilia magnis volute egestas vitae
                                                    sapien turpis ultrice auctor congue placerat
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>	{/* END TEXT BLOCK */}
                                {/* IMAGE BLOCK */}
                                <div className="col-md-6 order-first order-md-2">
                                    <div className="img-block right-column wow fadeInLeft">
                                        <img className="img-fluid" src="/images/img-03.png" alt="content-image" />
                                    </div>
                                </div>
                            </div>	{/* END SECTION CONTENT (ROW) */}
                        </div>	   {/* End container */}
                    </section>	{/* END TEXT CONTENT */}
                    {/* FEATURES-2
			============================================= */}
                    <section id="features-2" className="pt-100 features-section division">
                        <div className="container">
                            {/* SECTION TITLE */}
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-9">
                                    <div className="section-title mb-80">
                                        {/* Title */}
                                        <h2 className="s-52 w-700">Everything in One Place</h2>
                                        {/* Text */}
                                        <p className="s-21 color--grey">Ligula risus auctor tempus magna feugiat lacinia.</p>
                                    </div>
                                </div>
                            </div>
                            {/* FEATURES-2 WRAPPER */}
                            <div className="fbox-wrapper text-center">
                                <div className="row row-cols-1 row-cols-md-3">
                                    {/* FEATURE BOX #1 */}
                                    <div className="col">
                                        <div className="fbox-2 fb-1 wow fadeInUp">
                                            {/* Image */}
                                            <div className="fbox-img gr--whitesmoke h-175">
                                                <img className="img-fluid light-theme-img" src="/images/f_01.png" alt="feature-image" />
                                                <img className="img-fluid dark-theme-img" src="/images/f_01_dark.png" alt="feature-image" />
                                            </div>
                                            {/* Text */}
                                            <div className="fbox-txt">
                                                <h6 className="s-22 w-700">Intuitive Dashboard</h6>
                                                <p>Luctus egestas augue undo ultrice aliquam in lacus congue dapibus</p>
                                            </div>
                                        </div>
                                    </div>	{/* END FEATURE BOX #1 */}
                                    {/* FEATURE BOX #2 */}
                                    <div className="col">
                                        <div className="fbox-2 fb-2 wow fadeInUp">
                                            {/* Image */}
                                            <div className="fbox-img gr--whitesmoke h-175">
                                                <img className="img-fluid light-theme-img" src="/images/f_05.png" alt="feature-image" />
                                                <img className="img-fluid dark-theme-img" src="/images/f_05_dark.png" alt="feature-image" />
                                            </div>
                                            {/* Text */}
                                            <div className="fbox-txt">
                                                <h6 className="s-22 w-700">Effortless Integration</h6>
                                                <p>Tempor laoreet augue undo ultrice aliquam in lacusq luctus feugiat</p>
                                            </div>
                                        </div>
                                    </div>	{/* END FEATURE BOX #2 */}
                                    {/* FEATURE BOX #3 */}
                                    <div className="col">
                                        <div className="fbox-2 fb-3 wow fadeInUp">
                                            {/* Image */}
                                            <div className="fbox-img gr--whitesmoke h-175">
                                                <img className="img-fluid light-theme-img" src="/images/f_02.png" alt="feature-image" />
                                                <img className="img-fluid dark-theme-img" src="/images/f_02_dark.png" alt="feature-image" />
                                            </div>
                                            {/* Text */}
                                            <div className="fbox-txt">
                                                <h6 className="s-22 w-700">Real-time Analytics</h6>
                                                <p>Egestas luctus augue undo ultrice aliquam in lacus feugiat cursus</p>
                                            </div>
                                        </div>
                                    </div>	{/* END FEATURE BOX #3 */}
                                </div>  {/* End row */}
                            </div>	{/* END FEATURES-2 WRAPPER */}
                        </div>     {/* End container */}
                    </section>	{/* END FEATURES-2 */}
                    {/* TEXT CONTENT
			============================================= */}
                    <section className="pt-100 ct-04 content-section division">
                        <div className="container">
                            {/* SECTION CONTENT (ROW) */}
                            <div className="row d-flex align-items-center">
                                {/* TEXT BLOCK */}
                                <div className="col-md-6 order-last order-md-2">
                                    <div className="txt-block left-column wow fadeInRight">
                                        {/* CONTENT BOX #1 */}
                                        <div className="cbox-2 process-step">
                                            {/* Icon */}
                                            <div className="ico-wrap">
                                                <div className="cbox-2-ico bg--theme color--white">1</div>
                                                <span className="cbox-2-line" />
                                            </div>
                                            {/* Text */}
                                            <div className="cbox-2-txt">
                                                <h5 className="s-22 w-700">Simple, Secure &amp; Intuitive</h5>
                                                <p>Ligula risus auctor tempus feugiat dolor lacinia nemo purus in lipsum purus
                                                    sapien quaerat a primis viverra tellus vitae luctus dolor ipsum neque ligula
                                                    quaerat
                                                </p>
                                            </div>
                                        </div>	{/* END CONTENT BOX #1 */}
                                        {/* CONTENT BOX #2 */}
                                        <div className="cbox-2 process-step">
                                            {/* Icon */}
                                            <div className="ico-wrap">
                                                <div className="cbox-2-ico bg--theme color--white">2</div>
                                                <span className="cbox-2-line" />
                                            </div>
                                            {/* Text */}
                                            <div className="cbox-2-txt">
                                                <h5 className="s-22 w-700">Weekly Email Reports</h5>
                                                <p>Ligula risus auctor tempus feugiat dolor lacinia nemo purus in lipsum purus
                                                    sapien quaerat a primis viverra tellus vitae luctus dolor ipsum neque ligula
                                                    quaerat
                                                </p>
                                            </div>
                                        </div>	{/* END CONTENT BOX #2 */}
                                        {/* CONTENT BOX #3 */}
                                        <div className="cbox-2 process-step">
                                            {/* Icon */}
                                            <div className="ico-wrap">
                                                <div className="cbox-2-ico bg--theme color--white">3</div>
                                            </div>
                                            {/* Text */}
                                            <div className="cbox-2-txt">
                                                <h5 className="s-22 w-700">No Personal Data Collected</h5>
                                                <p className="mb-0">Ligula risus auctor tempus feugiat dolor lacinia nemo purus in
                                                    lipsum purus sapien quaerat a primis viverra tellus vitae luctus dolor ipsum n
                                                    eque ligula quaerat
                                                </p>
                                            </div>
                                        </div>	{/* END CONTENT BOX #3 */}
                                    </div>
                                </div>	{/* END TEXT BLOCK */}
                                {/* IMAGE BLOCK */}
                                <div className="col-md-6 order-first order-md-2">
                                    <div className="img-block wow fadeInLeft">
                                        <img className="img-fluid" src="/images/tablet-01.png" alt="content-image" />
                                    </div>
                                </div>
                            </div>	{/* END SECTION CONTENT (ROW) */}
                        </div>	   {/* End container */}
                    </section>	{/* END TEXT CONTENT */}

                    <Integrations1_8 />
                    
                    {/* BANNER-3
			============================================= */}
                    <section id="banner-3" className="pt-100 banner-section">
                        <div className="container">
                            {/* BANNER-3 WRAPPER */}
                            <div className="banner-3-wrapper bg--05 bg--scroll r-16">
                                <div className="banner-overlay">
                                    <div className="row">
                                        {/* BANNER-3 TEXT */}
                                        <div className="col">
                                            <div className="banner-3-txt color--white">
                                                {/* Title */}
                                                <h2 className="s-48 w-700">Starting with Martex is easy, fast and free</h2>
                                                {/* Text */}
                                                <p className="p-xl">It only takes a few clicks to get started</p>
                                                {/* Button */}
                                                <Link href="/signup-1" className="btn r-04 btn--theme hover--tra-white">Get srarted - it's free</Link>
                                                {/* Button Text */}
                                                <p className="p-sm btn-txt ico-15">
                                                    <span className="flaticon-check" /> Free for 14 days, no credit card required.
                                                </p>
                                            </div>
                                        </div>	{/* END BANNER-3 TEXT */}
                                    </div>   {/* End row */}
                                </div>   {/* End banner overlay */}
                            </div>    {/* END BANNER-3 WRAPPER */}
                        </div>     {/* End container */}
                    </section>
                </div>

            </Layout>
        </>
    )
}