import { Link } from "react-router-dom";
import Logo from "/images/logos/LOGO_COMPLETO.webp";
import TikTokIcon from "/images/icons/tiktok.svg";
import InstagramIcon from "/images/icons/instagram.svg";
import FacebookIcon from "/images/icons/facebook.svg";
import { URL_FACEBOOK, URL_INSTAGRAM, URL_TIKTOK } from "../../data";

export const Navbar = () => {
    return (
        <>
            <nav className="bg-green-200">
                <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative flex items-center h-16">
                        <div className="flex items-center flex-1 sm:justify-start">
                            <div className="flex items-center flex-shrink-0">
                                <Link to="/">
                                    <img
                                        style={{
                                            maxWidth: "3.125rem",
                                            minWidth: "3.125rem",
                                        }}
                                        src={Logo}
                                        alt="Best Markid"
                                    />
                                </Link>
                            </div>

                            <div className="items-start hidden sm:ml-6 sm:block">
                                <Link to="/">
                                    <div className="flex space-x-4">
                                        <span className="tracking-wide text-green-600 font-fontTitleBold xl:text-2xl">
                                            Best Mar
                                            <span className="text-orange-500">
                                                kid
                                            </span>
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <strong className="text-green-900">Síguenos</strong>
                            <div className="relative flex justify-center ml-3 align-middle">
                                <div className="m-2">
                                    <Link to={URL_INSTAGRAM}>
                                        <img
                                            src={InstagramIcon}
                                            alt="InstagramIcon"
                                            className="w-[1.5625rem]"
                                        />
                                    </Link>
                                </div>
                                <div className="m-2">
                                    <Link to={URL_FACEBOOK}>
                                        <img
                                            src={FacebookIcon}
                                            alt="FacebookIcon"
                                            className="w-[1.5625rem]"
                                        />
                                    </Link>
                                </div>
                                <div className="m-2 text-green-900">
                                    <Link to={URL_TIKTOK}>
                                        <img
                                            src={TikTokIcon}
                                            alt="TikTokIcon"
                                            className="w-[1.5625rem]"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};
