import { Footer, Navbar, Policie } from "../components";

const PoliciesPage = () => {
    return (
        <>
            <Navbar />
            <section className="flex flex-col items-center p-10 mx-4">
                <p className="text-xl text-center text-green-900 xl:text-3xl font-fontTitleBold">Transparencia y Confianza: Descarga Nuestros Documentos</p>
                <br />
                <p className="text-lg text-center xl:text-justify p2">
                    ¡Bienvenido a nuestra plataforma Best MarkID! Queremos
                    asegurarnos de que tengas toda la información necesaria para
                    tener una experiencia transparente y segura. A continuación,
                    puedes descargar nuestros documentos clave, que incluyen los
                    Términos y Condiciones, la Política de Privacidad y la
                    Política de Garantía. Estos documentos detallan nuestras
                    prácticas, derechos y responsabilidades, y están diseñados
                    para brindarte claridad y confianza mientras navegas y
                    realizas transacciones en nuestra plataforma. Si tienes
                    alguna pregunta o necesitas más información, no dudes en
                    ponerte en contacto con nosotros. ¡Gracias por ser parte de
                    Best MarkID!
                </p>
                <Policie />
            </section>
            <Footer />
        </>
    );
};

export default PoliciesPage;
