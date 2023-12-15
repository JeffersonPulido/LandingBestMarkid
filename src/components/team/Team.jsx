import { Avatar } from "@mui/material";
import React from "react";

export const Team = () => {
  return (
    <>
      <div className="bg-white py-24 sm:py-32 m-10">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl flex justify-center items-center flex-wrap">
            <h2 className="text-3xl text-center font-bold tracking-tight text-orange-900 sm:text-4xl">
              Conoce nuestro liderazgo
            </h2>
            <p className="mt-6 text-lg leading-8 text-green-900">
              ¡Bienvenido a nuestro equipo en el corazón de Best markid! Somos
              un grupo apasionado de tres individuos dedicados a hacer de la
              experiencia de compra y venta de productos para bebés usados una
              experiencia excepcional. Con compromiso, creatividad y un toque de
              cariño, trabajamos juntos para asegurarnos de que cada transacción
              sea suave y satisfactoria. ¡Estamos aquí para hacer de tu viaje
              con nosotros algo inolvidable!
            </p>
          </div>

          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 justify-center items-center m-10"
          >
            {/* Person1 */}
            <li>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-orange-600">
                    Jefferson Pulido
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-green-900">
                    CTO & Developer
                  </p>
                </div>
              </div>
            </li>

            {/* Person2 */}
            <li>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-orange-600">
                    Jane Alarcon
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-green-900">
                    Gerente de Marketing y Relaciones Empresariales
                  </p>
                </div>
              </div>
            </li>
            {/* Person3 */}
            <li>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-orange-600">
                    Cristian Garcia
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-green-900">
                    Lider de diseño e innovacion & Developer
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
