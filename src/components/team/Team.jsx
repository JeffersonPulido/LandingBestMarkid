export const Team = () => {
    return (
        <>
            <div className="py-10 m-10 bg-white border rounded shadow-xl">
                <div className="flex flex-col items-center px-6 mx-auto max-w-7xl gap-x-8 gap-y-10 lg:px-8">
                    <div className="flex flex-wrap items-center justify-center max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-center text-orange-900 sm:text-4xl">
                            Conoce nuestro liderazgo
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-center text-green-900">
                            ¡Bienvenido a nuestro equipo en el corazón de Best
                            markid! Somos un grupo apasionado dedicados a hacer
                            de la experiencia de compra y venta de productos
                            para bebés usados una experiencia excepcional.
                        </p>
                        <p className="text-lg leading-8 text-center text-green-900">
                            Con compromiso, creatividad y un toque de cariño,
                            trabajamos juntos para asegurarnos de que cada
                            transacción sea suave y satisfactoria.
                        </p>
                        <p className="mt-4 text-lg font-bold leading-8 text-center text-green-900">
                            ¡Estamos aquí para hacer de tu viaje con nosotros
                            algo inolvidable!
                        </p>
                    </div>

                    <ul
                        role="list"
                        className="flex flex-col items-center justify-center gap-8 mx-auto sm:flex-row"
                    >
                        {/* Person1 */}
                        <li className="h-40 p-2 m-2 w-52">
                            <div className="flex flex-col items-center gap-y-4">
                                <img
                                    className="w-16 h-16 rounded-full"
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                <div className="flex flex-col justify-center text-center">
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-orange-600">
                                        Jefferson Pulido
                                    </h3>
                                    <p className="text-sm font-semibold leading-6 text-green-900">
                                        CEO & Developer
                                    </p>
                                </div>
                            </div>
                        </li>
                        {/* Person2 */}
                        <li className="h-40 p-2 m-2 w-52">
                            <div className="flex flex-col items-center gap-y-4">
                                <img
                                    className="w-16 h-16 rounded-full"
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                <div className="flex flex-col justify-center text-center">
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-orange-600">
                                        Jane Alarcon
                                    </h3>
                                    <p className="text-sm font-semibold leading-6 text-green-900">
                                        Marketing y Relaciones Empresariales
                                    </p>
                                </div>
                            </div>
                        </li>
                        {/* Person3 */}
                        <li className="h-40 p-2 m-2 w-52">
                            <div className="flex flex-col items-center gap-y-4">
                                <img
                                    className="w-16 h-16 rounded-full"
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                <div className="flex flex-col justify-center text-center">
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-orange-600">
                                        Cristian Garcia
                                    </h3>
                                    <p className="text-sm font-semibold leading-6 text-green-900">
                                        Líder de diseño e innovación & Developer
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};
