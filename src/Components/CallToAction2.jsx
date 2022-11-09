import { useState} from "react";
import { useScroll } from "../eventslisteners";
import {TbTruckDelivery} from "react-icons/tb";
import { Link } from "react-router-dom";


function CallToAction2() {

  const [animate, setAnimate] = useState(false);

  useScroll(() => {
    if (window.scrollY > 1200) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  });

  return (
    <div>
      <div className="bg-[#45d485] dark:bg-gray-800">
        <div className="text-center w-full mx-auto py-12 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4x1">
            <span
              className={`${
                animate && "animate__animated animate__headShake"
              } block text-[#1D8049]`}
            >
              Distribución y Logística
            </span>
            <span className="flex justify-center">
              <TbTruckDelivery size={60} color="black" />
            </span>
          </h2>
          <p className={`text-xl mt-4 max-w-md mx-auto text-[#1BA84F]`}>
          Realizamos entregas en localidades específicas cada 15 dias sin costo de flete.
          </p>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
              <Link to="/transporte">
              <button
                type="button"
                className={`py-4 px-6 bg-[#2FCB75]  hover:bg-[#1D8049] focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ${
                  animate &&
                  "animate__animated animate__wobble animate__delay-2s"
                }`}
              >
                Ver Localidades
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction2;
