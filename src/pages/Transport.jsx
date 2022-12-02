import Waves from "../Components/Waves";
import reparto from "../assets/transporte.png";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import { useScroll } from "../eventslisteners";

function Transport() {
  const [animate, setAnimate] = useState(false);
  useScroll(() => {
    if (window.scrollY > 1200) {
      setAnimate(true);
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <Waves />
      <div className="bg-[#46E17F] py-1">
        <div className="bg-[#65E695]">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32  ">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-[#2cbe6e] animate__animated animate__backInLeft">
              Distribución y Logística
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-[#1D8049] animate__animated animate__backInLeft">
              Realizamos entregas a las siguientes localidades cada 15 dias sin
              costo de flete.
            </p>
            <div className="flex flex-wrap justify-center bg-[#46E17F] rounded animate__animated animate__bounceIn">
              <div className="">
                <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
                  <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold sm:text-4xl ">
                      Zonas que abarcamos:
                    </h2>
                  </div>
                  <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8 flex flex-col items-center">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <dt className="text-lg font-medium">Zona 1:</dt>
                        <dd className="mt-2 text-[#208d51]">
                          Colon, San Justo, Mantero, Caseros, San Jose y Villa
                          Elisa.
                        </dd>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="ml-3">
                        <dt className="text-lg font-medium">Zona 2:</dt>
                        <dd className="mt-2 text-[#208d51]">
                          Gualeguay y La Roque. 
                        </dd>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="ml-3">
                        <dt className="text-lg font-medium">Zona 3:</dt>
                        <dd className="mt-2 text-[#208d51]">
                          Nogoya, Tala, Basavilbasso, Lucas Gonzales, Macia
                        </dd>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="ml-3">
                        <dt className="text-lg font-medium">Zona 4:</dt>
                        <dd className="mt-2 text-[#208d51]">
                          Villaguay, San Salvador, Urquiza, Dominguez.
                        </dd>
                      </div>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={reparto}
            loading="lazy"
            alt="reparto"
            className="w-3/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500 animate__animated animate__backInLeft"
          />
        </div>
          <div className="mb-4">
          <div
                    className={`py-6 bg-[#2FCB75] text-gray-50r  ${
                      animate && "animate__animated animate__backInLeft"
                    }`}>
            <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
              <h1 className="text-3xl font-semibold leading-tight text-center lg:text-left text-black">
                ¿Quieres saber más información sobre las distribución?
              </h1>
              <Link to="/contacto">
                <button className="px-8 py-3 text-lg font-semibold rounded text-white bg-green-500 shadow-lg hover:bg-[#1D8049] transition ease-in duration-200 hover:shadow-none">
                  Contacto
                </button>
              </Link>
              <span>O</span>
              <a
                href="https://wa.me/5493446476381?text=Hola!%20Quisiera%20saber%20m%C3%A1s%20sobre%20la%20distribución."
                target="_blank"
                rel="noreferrer"
              >
                <button className="px-8 py-3 text-lg font-semibold rounded text-white bg-[#25d366] shadow-lg hover:bg-[#1D8049] transition ease-in duration-200 hover:shadow-none ">
                  WhatsApp
                </button>
              </a>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
}

export default Transport;
