import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { URL_FACEBOOK, URL_INSTAGRAM, URL_LINKEDIN } from "../../data";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <section className="flex flex-wrap justify-center py-8 bg-green-900">
        {/* Box 1 */}
        <div className="flex justify-center w-48 m-5">
          <img
            className="w-40"
            src="/images/LOGO_CLARO_con_eslogan_.webp"
            alt="Best Markid"
          />
        </div>
        <div className="flex justify-center space-x-20">
          <div className="flex flex-wrap justify-center">
            {/* Box 2 */}
            <div className="w-48 m-2 text-center text-white">
              <strong className="text-green-200">Contactenos</strong>
              <hr className="m-5" />
              <ul>
                <li className="m-2">Bogota, Colombia</li>
                <li className="m-2">
                  <div className="flex justify-center gap-4">
                    <Link to={URL_FACEBOOK}>
                      <FacebookIcon />
                    </Link>
                    <Link to={URL_INSTAGRAM}>
                      <InstagramIcon />
                    </Link>
                    <Link to={URL_LINKEDIN}>
                      <LinkedInIcon />
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            {/* Box 3 */}
            <div className="w-48 m-2 text-center text-white">
              <strong className="text-green-200">Soporte</strong>
              <hr className="m-5" />
              <ul>
                <li className="m-2">Preguntas frecuentes</li>
                <li className="m-2">Chatea con nosotros</li>
                <li className="m-2">
                  <a href="mailto:pqrs@bestmarkid.com">pqrs@bestmarkid.com</a>
                </li>
              </ul>
            </div>
            {/* Box 4 */}
            <div className="w-48 m-2 text-center text-white">
              <strong className="text-green-200">Best Markid</strong>
              <hr className="m-5" />
              <ul>
                <Link to="/policies">
                  <li className="m-2">¿Quienes somos?</li>
                </Link>
                <Link to="/policies">
                  <li className="m-2">Terminos y condiciones</li>
                </Link>
                <Link to="/policies">
                  <li className="m-2">
                    Politica de tratamiento de datos personales
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="p-2 text-center text-white bg-green-600 item-center">
        <small>
          Desarrollado con &#x2764; por House the Latam &copy; {year}
        </small>
      </div>
    </footer>
  );
};
