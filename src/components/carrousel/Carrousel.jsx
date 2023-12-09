import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { NAME_APP, SLOGAN, URL_APP } from "../../data";
import { sliderImages } from ".";

export const Carrousel = () => {
    return (
        <>
            <Carousel
                showIndicators
                // autoPlay
                infiniteLoop
                interval={2000}
                showStatus={false}
                showThumbs={false}
            >
                {sliderImages.map((URL, index) => (
                    <div className="slide" key={`slider${index}`}>
                        <div
                            className="flex items-center justify-center h-80"
                            style={{
                                backgroundImage: `url(${URL})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                            }}
                        >
                            <div className="container grid flex-col items-center justify-center gap-y-4">
                                <div className="flex justify-center border border-whiteGreen-50 items-center p-3 text-center bg-green-600 rounded-lg xl:w-[35rem] h-20 text-2xl opacity-90 text-whiteGreen-50 font-fontTitleRegular">
                                    <p>{SLOGAN}</p>
                                </div>
                                <div className="flex items-center justify-center">
                                    <Link to={URL_APP}>
                                        <button className="w-auto px-4 py-2 text-xl text-green-900 transition duration-300 ease-in-out bg-green-200 rounded-lg hover:bg-green-900 hover:text-green-200 focus:outline-none focus:ring focus:border-blue-300">
                                            {`¡Conoce ${NAME_APP}!`}
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </>
    );
};
