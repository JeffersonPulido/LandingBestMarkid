import { AboutUs, Banner, Carrousel, Categories, Footer, Navbar } from "../components";
import { buttonBanner1, buttonBanner2, descriptionBanner1, descriptionBanner2, srcBanner1, srcBanner2, titleBanner1, titleBanner2 } from ".";

const HomePage = () => {
    return (
        <>
            <section className="bg-green-100">
                <Navbar />
            </section>
            <section>
                <Carrousel />
            </section>
            <section className="my-10">
                <div className="text-center mx-14">
                    <h2 className="h2 text-orange-800 pb-3.5 text-2xl xl:text-3xl">
                        Categorías
                    </h2>
                    <div className="leading-4 text-orange-500 p2">
                        <p className="text-lg">Te invitamos a descubrir la amplia variedad de productos que puedes encontrar en <span className="tracking-wide text-green-600 font-fontTitleBold">best mar<span className="text-orange-500">kid</span></span>
                        </p>
                    </div>
                </div>
                <div className="mx-10 py-8 flex flex-col gap-3.5">
                    <Categories />
                </div>
            </section>
            <Banner title={titleBanner1} description={descriptionBanner1} button={buttonBanner1} src={srcBanner1}/>
            <section className="m-10">
                <AboutUs />
            </section>
            <Banner title={titleBanner2} description={descriptionBanner2} button={buttonBanner2} src={srcBanner2}/>
            <Footer />
        </>
    );
};

export default HomePage;
