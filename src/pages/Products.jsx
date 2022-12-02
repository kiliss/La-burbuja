import Waves from "../Components/Waves";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useScroll } from "../eventslisteners";
import Carousel from "../Components/Carousel";
import Carousel2 from "../Components/Carousel2";

function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [animate, setAnimate] = useState(false);
  const [animate2, setAnimate2] = useState(false);
  const [animate3, setAnimate3] = useState(false);
  useScroll(() => {
    if (window.scrollY > 100) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
    if (window.scrollY > 700) {
      setAnimate2(true);
    } else {
      setAnimate2(false);
    }
    if (window.scrollY > 1000) {
      setAnimate3(true);
    }
  });
  return (
    <div>
      <Waves />
      <div className="bg-[#45d485] text-gray-100 py-1">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl ">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-green-700 animate__animated animate__backInLeft">
              Productos
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-black animate__animated animate__backInLeft">
              Realizamos entregas a las{" "}
              <Link className="text-green-700" to="/transporte">
                siguientes
              </Link>{" "}
              localidades cada 15 dias sin costo de flete.
            </p>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center ">
            <div>
              <div
                className={`space-y-12  ${
                  animate && "animate__animated animate__pulse"
                }`}
              >
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-green-400 text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium leading-6 text-black">
                      Distribuimos productos sueltos para limpieza ya sean
                      jabones líquidos suavizantes lavandina y más
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-green-400 text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    {/* <h4 className="text-lg font-medium leading-6 text-black">
                      Cu imperdiet posidonium sed
                    </h4> */}
                    <p className="text-lg font-medium leading-6 text-black">
                      Contamos con químicos de primera calidad para el cuidado
                      de la pileta ya sean institucionales como del hogar
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-green-400 text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    {/* <h4 className="text-lg font-medium leading-6 text-black">
                      Nulla omittam sadipscing mel ne
                    </h4> */}
                    <p className="text-lg font-medium leading-6 text-black">
                      Contamos con los robots limpia piletas mytronics dolphin.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <Carousel />
            </div>
          </div>
          <div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div className="lg:col-start-2">
                {/* <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-black">
                  Eam nibh gloriatur ex
                </h3> */}
                {/* <p className="mt-3 text-lg text-gray-400">
                Bombas y filtros para pileta (astrapool)
                </p> */}
                <div
                  className={`space-y-12  ${
                    animate2 && "animate__animated animate__pulse"
                  }`}
                >
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-green-400 text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      {/* <h4 className="text-lg font-medium leading-6 text-black">
                        Cibo augue offendit has ad
                      </h4> */}
                      <p className="text-lg font-medium leading-6 text-black">
                        Contamos con bombas y filtros para pileta (astrapool)
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-green-400 text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      {/* <h4 className="text-lg font-medium leading-6 text-black">
                        At eum ferri luptatum lobortis
                      </h4> */}
                      <p className="text-lg font-medium leading-6 text-black">
                        Contamos con accesorios (barrefondos, saca hojas, cabos,
                        etc...)
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-green-400 text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      {/* <h4 className="text-lg font-medium leading-6 text-black">
                        Dicunt verterem evertitur eu sea
                      </h4> */}
                      <p className="text-lg font-medium leading-6 text-black">
                        Manejamos marcas de artículos de limpieza (trapos de
                        piso esponjas cepillos para el piso, bolsas de residuo)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                <Carousel2 />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`py-6 bg-[#2FCB75] mb-4 flex flex-col items-center  ${
            animate3 && "animate__animated animate__backInLeft"
          }`}
        >
          <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
            <h1 className="text-3xl font-semibold leading-tight text-center lg:text-left text-black">
              ¿Quieres saber más información sobre nuestros productos?
            </h1>
            <Link to="/contacto">
              <button className="px-8 py-3 text-lg font-semibold rounded text-white bg-green-500 shadow-lg hover:bg-[#1D8049] transition ease-in duration-200 hover:shadow-none">
                Contacto
              </button>
            </Link>
            <span>O</span>
            <a
              href="https://wa.me/5493446476381?text=Hola!%20Quisiera%20saber%20m%C3%A1s%20sobre%20sus%20productos."
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
  );
}

export default Products;
