import { Link } from "react-router-dom";
import Logo from "/images/LOGO_COMPLETO.webp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
                            <strong className="text-green-900">
                                Siguenos
                            </strong>
                            <div className="relative flex ml-3">
                                <div
                                    className="m-2 text-green-900"
                                >
                                    <Link to='#'>
                                        <FacebookIcon />
                                    </Link>
                                </div>
                                <div
                                    className="m-2 text-green-900"
                                >
                                    <Link to='#'>
                                        <InstagramIcon />
                                    </Link>
                                </div>
                                <div
                                    className="m-2 text-green-900"
                                >
                                    <Link to='#'>
                                        <LinkedInIcon />
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
