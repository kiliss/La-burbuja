import Waves from "../Components/Waves";
import reparto from "../assets/transporte.png";

function Transport() {
  return (
    <div className="">
      <Waves />
      <div className="bg-[#46E17F] py-1">
        <div className="bg-[#65E695]">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-[#2cbe6e]">
              Distribución y Logística
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-[#1D8049]">
              Realizamos entregas a las siguientes localidades cada 15 dias sin
              costo de flete.
            </p>
            <div className="flex flex-wrap justify-center bg-[#46E17F] rounded">
              <div className="dark:bg-gray-800 dark:text-gray-100">
                <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
                  <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold sm:text-4xl ">
                      Zonas que abarcamos:
                    </h2>
                  </div>
                  <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
                    <div className="flex items-center">
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg> */}
                      <div className="ml-3">
                        <dt className="text-lg font-medium">Zona 1:</dt>
                        <dd className="mt-2 text-[#208d51]">
                          Colon, San Justo, Mantero, Caseros, San Jose y Villa
                          Elisa.
                        </dd>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg> */}
                      <div className="ml-3">
                        <dt className="text-lg font-medium">Zona 2:</dt>
                        <dd className="mt-2 text-[#208d51]">
                          Gualeguay y La Roque.
                        </dd>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg> */}
                      <div className="ml-3">
                        <dt className="text-lg font-medium">Zona 3:</dt>
                        <dd className="mt-2 text-[#208d51]">
                          Nogoya, Tala, Basavilbasso, Lucas Gonzales, Macia
                        </dd>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg> */}
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
            alt=""
            className="w-3/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500"
          />
          <div className="mb-2">
            <a
              href="https://wa.me/5493446476381?text=Hola!%20Quisiera%20saber%20m%C3%A1s%20sobre%20el%20reparto"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                className="inline-block p-3 pr-20 pl-20 rounded mb-2 text-white font-medium text-xs leading-tight uppercase shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out bg-[#25d366]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-7 h-7"
                >
                  <path
                    fill="currentColor"
                    d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transport;
