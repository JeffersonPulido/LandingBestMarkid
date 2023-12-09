import { Link } from "react-router-dom";

export const Banner = ({
    title = "",
    description = "",
    button = "",
    src = "",
}) => {
    return (
        <section className="bg-[url('/images/BANNER_ONE.webp')] bg-cover bg-no-repeat bg-center">
            <h2 className="mx-10 pt-16 pb-3.5 h1 text-green-900">
                <p>{title}</p>
            </h2>
            <h4 className="pb-8 mx-10 h4 text-whiteGreen-50">{description}</h4>
            <div className="flex justify-center pb-16 m-auto">
                <Link to={src}>
                    <button className="transition-all ease-in-out green-button h2">
                        {button}
                    </button>
                </Link>
            </div>
        </section>
    );
};
